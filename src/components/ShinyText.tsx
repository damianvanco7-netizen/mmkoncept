import React from "react";
import "./ShinyText.css";

interface ShinyTextProps {
  children: React.ReactNode;
  speed?: number;
  color?: string;
  shineColor?: string;
  spread?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  speed = 3,
  color = "rgba(255,255,255,0.7)",
  shineColor = "rgba(255,255,255,1)",
  spread = 120,
  className = "",
}) => {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        display: "block",
        color,
        backgroundImage: `linear-gradient(${spread}deg, ${color} 40%, ${shineColor} 50%, ${color} 60%)`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationDuration: `${speed}s`,
      }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
