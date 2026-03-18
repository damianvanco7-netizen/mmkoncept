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
    // Large tangled cluster on the right side
    const clusterCenterX = w * 0.68;
    const clusterCenterY = h * 0.42;
    const clusterRadius = Math.min(w, h) * 0.38;
    const clusterCount = 110;

    for (let i = 0; i < clusterCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * clusterRadius * (0.2 + Math.random() * 0.8);
      const bx = clusterCenterX + Math.cos(angle) * r;
      const by = clusterCenterY + Math.sin(angle) * r;
      nodes.push({
        baseX: bx, baseY: by, x: bx, y: by,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: 2.5 + Math.random() * 3,
      });
    }

    // 3 clean dots below the cluster, vertically aligned
    const dotsX = w * 0.68;
    const dotsStartY = h * 0.78;
    const dotsSpacing = 35;
    for (let i = 0; i < 3; i++) {
      nodes.push({
        baseX: dotsX, baseY: dotsStartY + i * dotsSpacing,
        x: dotsX, y: dotsStartY + i * dotsSpacing,
        vx: 0, vy: 0,
        radius: 5,
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

    const draw = () => {
      const { w, h } = sizeRef.current;
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      ctx.clearRect(0, 0, w, h);

      const interactRadius = 100;

      // Update positions
      for (const n of nodes) {
        // Ambient drift
        n.x += n.vx;
        n.y += n.vy;

        // Spring back to base
        n.x += (n.baseX - n.x) * 0.03;
        n.y += (n.baseY - n.y) * 0.03;

        // Mouse repulsion
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < interactRadius && dist > 0) {
          const force = (interactRadius - dist) / interactRadius * 2.5;
          n.x += (dx / dist) * force;
          n.y += (dy / dist) * force;
        }

        // Slight random wobble
        n.vx += (Math.random() - 0.5) * 0.04;
        n.vy += (Math.random() - 0.5) * 0.04;
        n.vx *= 0.95;
        n.vy *= 0.95;
      }

      // Draw connections
      const maxConnDist = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnDist) {
            const alpha = (1 - dist / maxConnDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(18, 20%, 35%, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw explicit line from cluster bottom to the 3 dots
      const clusterNodes = nodes.slice(0, 110);
      const dotNodes = nodes.slice(110);
      // Find the lowest cluster node near the dots X
      let bridgeNode = clusterNodes[0];
      let bestScore = -Infinity;
      for (const cn of clusterNodes) {
        const score = cn.y - Math.abs(cn.x - dotNodes[0].x) * 0.5;
        if (score > bestScore) {
          bestScore = score;
          bridgeNode = cn;
        }
      }
      // Draw line from bridge node through each dot
      ctx.beginPath();
      ctx.moveTo(bridgeNode.x, bridgeNode.y);
      for (const dn of dotNodes) {
        ctx.lineTo(dn.x, dn.y);
      }
      ctx.strokeStyle = `hsla(18, 20%, 35%, 0.3)`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(18, 20%, 35%, 0.6)`;
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
