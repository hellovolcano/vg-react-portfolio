import React from "react";
import "./polycard.css";

export default function PolyCard({
  as: Tag = "div",
  clip, 
  bg,
  width = "fit-content",
  rotate = "0deg",
  className = "",
  style = {},
  children,
  ...rest
}) {
  const cssVars = {
    "--poly-clip": clip,
    "--poly-bg": bg,
    "--poly-width": width,
    "--poly-rotate": rotate,
    ...style,
  };

  return (
    <Tag className={`poly-card ${className}`} style={cssVars} {...rest}>
      {children}
    </Tag>
  );
}
