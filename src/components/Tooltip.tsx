import React, { useState } from "react";
import "./Tooltip.css";

export type TooltipProps = {
  content: string;
  children: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
};

const Tooltip = ({ content, children, direction = "top" }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && <div className={`tooltip tooltip-${direction}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
