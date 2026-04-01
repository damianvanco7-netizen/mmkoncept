import { useRef, useEffect, useCallback } from 'react';

interface Node {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  const generateNodes = useCallback((w: number, h: number): Node[] => {
    const nodes: Node[] = [];
    // Compact ball/sphere-shaped cluster on the LEFT side
    const clusterCenterX = w * 0.22;
    const clusterCenterY = h * 0.45;
    const clusterRadius = Math.min(w, h) * 0.28; // smaller, tighter ball
    const clusterCount = 100;

    for (let i = 0; i < clusterCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Use gaussian-like distribution for more spherical density
      const rFactor = Math.pow(Math.random(), 0.5);
      const r = rFactor * clusterRadius;
      const bx = clusterCenterX + Math.cos(angle) * r;
      const by = clusterCenterY + Math.sin(angle) * r;
      nodes.push({
        baseX: bx, baseY: by, x: bx, y: by,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: 2 + Math.random() * 3,
      });
    }

    // 3 trailing dots - must end BEFORE the title text
    // Title "Life, just simplified" is right-aligned, starts around 55-60% of width
    // So dots must stay before ~48% of width
    const dotsY = h * 0.5;
    const dotsStartX = clusterCenterX + clusterRadius + 20;
    const dotsEndX = w * 0.46; // stop well before title
    const dotsSpacing = (dotsEndX - dotsStartX) / 2;
    
    for (let i = 0; i < 3; i++) {
      nodes.push({
        baseX: dotsStartX + i * dotsSpacing,
        baseY: dotsY + (i - 1) * 15, // slight vertical spread
        x: dotsStartX + i * dotsSpacing,
        y: dotsY + (i - 1) * 15,
        vx: 0, vy: 0,
        radius: 4.5 - i * 0.5,
      });
    }

    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
      nodesRef.current = generateNodes(w, h);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize();

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    const clusterCount = 100;

    const draw = () => {
      const { w, h } = sizeRef.current;
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      ctx.clearRect(0, 0, w, h);

      const interactRadius = 100;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.x += (n.baseX - n.x) * 0.03;
        n.y += (n.baseY - n.y) * 0.03;

        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < interactRadius && dist > 0) {
          const force = (interactRadius - dist) / interactRadius * 2.5;
          n.x += (dx / dist) * force;
          n.y += (dy / dist) * force;
        }

        n.vx += (Math.random() - 0.5) * 0.04;
        n.vy += (Math.random() - 0.5) * 0.04;
        n.vx *= 0.95;
        n.vy *= 0.95;
      }

      const clusterNodes = nodes.slice(0, clusterCount);
      const dotNodes = nodes.slice(clusterCount);

      // Connections within cluster - shorter range for tighter ball look
      const maxConnDist = 120;
      for (let i = 0; i < clusterNodes.length; i++) {
        for (let j = i + 1; j < clusterNodes.length; j++) {
          const a = clusterNodes[i];
          const b = clusterNodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnDist) {
            const alpha = (1 - dist / maxConnDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Curves from cluster to trailing dots
      const sortedByExit = [...clusterNodes].sort((a, b) => {
        const scoreA = a.x * 0.7 + a.y * 0.3;
        const scoreB = b.x * 0.7 + b.y * 0.3;
        return scoreB - scoreA;
      });
      const exitNodes = [sortedByExit[0], sortedByExit[1], sortedByExit[2]];

      for (let i = 0; i < 3; i++) {
        const from = exitNodes[i];
        const to = dotNodes[i];
        if (!from || !to) continue;

        const midX = (from.x + to.x) / 2;
        const midY = to.y - (to.y - from.y) * 0.15;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.quadraticCurveTo(midX + (i - 1) * 30, midY, to.x, to.y);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.18)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Lines between trailing dots
      for (let i = 0; i < dotNodes.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(dotNodes[i].x, dotNodes[i].y);
        ctx.lineTo(dotNodes[i + 1].x, dotNodes[i + 1].y);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.25)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw cluster nodes
      for (const n of clusterNodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 0.4)`;
        ctx.fill();
      }

      // Draw trailing dots
      for (const n of dotNodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 0.55)`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [generateNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-auto"
      style={{ opacity: 0.9 }}
    />
  );
};

export default NetworkCanvas;
