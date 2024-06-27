import React, { useEffect, useState } from "react";
import "./Tooltip.css";

export type TooltipProps = {
  content: string;
  children: React.ReactNode;
  direction?: "top" | "bottom" | "left" | "right";
  showDelay?: number;
  hideDelay?: number;
};

const Tooltip = ({ content, children, direction = "top", showDelay = 0, hideDelay = 0 }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  let showTimeoutId: NodeJS.Timeout;
  let hideTimeoutId: NodeJS.Timeout;

  const showTooltip = () => {
    clearTimeout(hideTimeoutId); // 숨기기 액션이 있으면 취소
    showTimeoutId = setTimeout(() => {
      setVisible(true);
    }, showDelay);
  };

  const hideTooltip = () => {
    clearTimeout(showTimeoutId); // 보여주기 액션이 있으면 취소
    hideTimeoutId = setTimeout(() => {
      setVisible(false);
    }, hideDelay);
  };

  // 컴포넌트 언마운트 시에 타이머 클리어
  useEffect(() => {
    return () => {
      clearTimeout(showTimeoutId);
      clearTimeout(hideTimeoutId);
    };
  }, []);

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && <div className={`tooltip tooltip-${direction}`}>{content}</div>}
    </div>
  );
};

export default Tooltip;
