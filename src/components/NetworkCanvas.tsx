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

interface NetworkCanvasProps {
  direction?: 'right' | 'down';
  variant?: 'hero' | 'consulting';
}

const NetworkCanvas = ({ direction = 'right', variant = 'hero' }: NetworkCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  const generateNodes = useCallback((w: number, h: number): Node[] => {
    const nodes: Node[] = [];

    if (direction === 'down') {
      // Mobile: cluster at top center, dots trailing downward — larger & less dense
      const clusterCenterX = w * 0.5;
      const clusterCenterY = h * 0.3;
      const clusterRadius = Math.min(w, h) * 0.35;
      const clusterCount = 50;

      for (let i = 0; i < clusterCount; i++) {
        const angle = Math.random() * Math.PI * 2;
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

      // 3 trailing dots going downward
      const dotsX = w * 0.5;
      const dotsStartY = clusterCenterY + clusterRadius + 20;
      const dotsEndY = h * 0.85;
      const dotsSpacing = (dotsEndY - dotsStartY) / 2;

      for (let i = 0; i < 3; i++) {
        nodes.push({
          baseX: dotsX,
          baseY: dotsStartY + i * dotsSpacing,
          x: dotsX,
          y: dotsStartY + i * dotsSpacing,
          vx: 0, vy: 0,
          radius: 4.5 - i * 0.5,
        });
      }
    } else if (variant === 'consulting') {
      // Consulting: same network geometry as hero, with the final chain leading toward Connect
      const clusterCenterX = w * 0.22;
      const clusterCenterY = h * 0.45;
      const clusterRadius = Math.min(w, h) * 0.35;
      const clusterCount = 120;

      for (let i = 0; i < clusterCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const rFactor = Math.pow(Math.random(), 0.7);
        const r = rFactor * clusterRadius;
        const bx = clusterCenterX + Math.cos(angle) * r;
        const by = clusterCenterY + Math.sin(angle) * r;
        nodes.push({
          baseX: bx, baseY: by, x: bx, y: by,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: 2.5 + Math.random() * 3.5,
        });
      }

      // 3 trailing dots toward bottom-right, matching the home hero flow and aiming at Connect
      const trailStartX = w * 0.52;
      const trailStartY = h * 0.72;
      const trailEndX = w * 0.68;
      const trailEndY = h * 0.92;

      for (let i = 0; i < 3; i++) {
        const t = i / 2;
        nodes.push({
          baseX: trailStartX + (trailEndX - trailStartX) * t,
          baseY: trailStartY + (trailEndY - trailStartY) * t,
          x: trailStartX + (trailEndX - trailStartX) * t,
          y: trailStartY + (trailEndY - trailStartY) * t,
          vx: 0, vy: 0,
          radius: 5,
        });
      }
    } else {
      // Hero desktop: cluster on LEFT, dots trailing to bottom-right toward Our Portfolio button
      const clusterCenterX = w * 0.22;
      const clusterCenterY = h * 0.45;
      const clusterRadius = Math.min(w, h) * 0.35;
      const clusterCount = 120;

      for (let i = 0; i < clusterCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const rFactor = Math.pow(Math.random(), 0.7);
        const r = rFactor * clusterRadius;
        const bx = clusterCenterX + Math.cos(angle) * r;
        const by = clusterCenterY + Math.sin(angle) * r;
        nodes.push({
          baseX: bx, baseY: by, x: bx, y: by,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: 2.5 + Math.random() * 3.5,
        });
      }

      // 3 trailing dots toward bottom-right (Our Portfolio button)
      const trailStartX = w * 0.52;
      const trailStartY = h * 0.72;
      const trailEndX = w * 0.68;
      const trailEndY = h * 0.92;

      for (let i = 0; i < 3; i++) {
        const t = i / 2;
        nodes.push({
          baseX: trailStartX + (trailEndX - trailStartX) * t,
          baseY: trailStartY + (trailEndY - trailStartY) * t,
          x: trailStartX + (trailEndX - trailStartX) * t,
          y: trailStartY + (trailEndY - trailStartY) * t,
          vx: 0, vy: 0,
          radius: 5,
        });
      }
    }

    return nodes;
  }, [direction, variant]);

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

    const clusterCount = direction === 'down' ? 50 : 120;

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

      const maxConnDist = direction === 'down' ? 120 : 150;
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

      // Single chain: cluster -> dot0 -> dot1 -> dot2 (one line between each)
      // Find the closest cluster node to the first trailing dot
      const firstDot = dotNodes[0];
      if (firstDot) {
        let closestIdx = 0;
        let closestDist = Infinity;
        for (let i = 0; i < clusterNodes.length; i++) {
          const dx = clusterNodes[i].x - firstDot.x;
          const dy = clusterNodes[i].y - firstDot.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < closestDist) {
            closestDist = d;
            closestIdx = i;
          }
        }
        // Draw curve from closest cluster node to first dot
        const from = clusterNodes[closestIdx];
        const midX = (from.x + firstDot.x) / 2;
        const midY = (from.y + firstDot.y) / 2 - 15;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.quadraticCurveTo(midX, midY, firstDot.x, firstDot.y);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.18)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Connect trailing dots: dot0—dot1, dot1—dot2
      for (let i = 0; i < dotNodes.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(dotNodes[i].x, dotNodes[i].y);
        ctx.lineTo(dotNodes[i + 1].x, dotNodes[i + 1].y);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.25)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      for (const n of clusterNodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 0.4)`;
        ctx.fill();
      }

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
  }, [generateNodes, direction]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-auto"
      style={{ opacity: 0.9 }}
    />
  );
};

export default NetworkCanvas;
