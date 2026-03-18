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
    const count = Math.min(120, Math.max(60, Math.floor(w * h / 12000)));

    // Dense cluster on the left (~60% of nodes in left 40%)
    const leftCount = Math.floor(count * 0.6);
    for (let i = 0; i < leftCount; i++) {
      const bx = Math.random() * w * 0.45;
      const by = h * 0.15 + Math.random() * h * 0.7;
      nodes.push({
        baseX: bx, baseY: by, x: bx, y: by,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2 + Math.random() * 2,
      });
    }

    // Middle transition zone
    const midCount = Math.floor(count * 0.25);
    for (let i = 0; i < midCount; i++) {
      const bx = w * 0.4 + Math.random() * w * 0.3;
      const by = h * 0.25 + Math.random() * h * 0.5;
      nodes.push({
        baseX: bx, baseY: by, x: bx, y: by,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 2 + Math.random() * 1.5,
      });
    }

    // Right side — aligned dots on a gentle horizontal line
    const rightCount = count - leftCount - midCount;
    const lineY = h * 0.5;
    for (let i = 0; i < rightCount; i++) {
      const t = i / (rightCount - 1);
      const bx = w * 0.75 + t * w * 0.2;
      const by = lineY + (Math.random() - 0.5) * 8;
      nodes.push({
        baseX: bx, baseY: by, x: bx, y: by,
        vx: 0, vy: 0,
        radius: 2.5 + Math.random(),
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
      const maxConnDist = 120;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connection threshold decreases toward right
          const avgX = (a.x + b.x) / 2;
          const rightFactor = 1 - (avgX / w) * 0.6;
          const threshold = maxConnDist * rightFactor;

          if (dist < threshold) {
            const alpha = (1 - dist / threshold) * 0.25 * rightFactor;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(18, 20%, 40%, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const rightness = n.x / w;
        const alpha = 0.35 + (1 - rightness) * 0.35;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(18, 20%, 35%, ${alpha})`;
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
      style={{ opacity: 0.6 }}
    />
  );
};

export default NetworkCanvas;
