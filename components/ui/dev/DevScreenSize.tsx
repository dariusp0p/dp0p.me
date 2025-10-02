"use client";
import React, { useEffect, useState } from "react";

const getBreakpoint = (width: number) => {
  if (width < 640) return "sm";
  if (width < 768) return "md";
  if (width < 1024) return "lg";
  if (width < 1280) return "xl";
  return "2xl";
};

const DevScreenSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0, breakpoint: "sm" });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSize({ width, height, breakpoint: getBreakpoint(width) });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 8,
        right: 8,
        background: "rgba(0,0,0,0.7)",
        color: "#fff",
        padding: "6px 12px",
        borderRadius: "8px",
        fontSize: "0.9rem",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      {size.width}×{size.height} ({size.breakpoint})
    </div>
  );
};

export default DevScreenSize;
