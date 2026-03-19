import React, { useRef, useState, useCallback } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tiltMaxX?: number;
  tiltMaxY?: number;
  glare?: boolean;
  scale?: number;
  onClick?: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  style = {},
  tiltMaxX = 8,
  tiltMaxY = 8,
  glare = true,
  scale = 1.02,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -tiltMaxX;
      const rotateY = ((x - centerX) / centerX) * tiltMaxY;

      setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`);

      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        setGlareStyle({
          opacity: 0.15,
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
        });
      }
    },
    [tiltMaxX, tiltMaxY, scale, glare]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlareStyle({ opacity: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        ...style,
        transform,
        transition: "transform 0.25s ease-out",
        cursor: onClick ? "pointer" : undefined,
        position: "relative",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
      {glare && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            transition: "opacity 0.25s ease-out",
            ...glareStyle,
          }}
        />
      )}
    </div>
  );
};

export default TiltCard;
