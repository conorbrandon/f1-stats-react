import React from "react";
import { DefaultTooltipPosition, TooltipPosition } from "../../App";
import styles from "./Tooltip.module.css";

interface TooltipProps {
  child?: JSX.Element,
  position?: TooltipPosition,
  isDarkMode: boolean
}

export const Tooltip: React.FC<TooltipProps> = ({ child, position, isDarkMode }) => {
  const myChild = child || <></>;
  const myPosition = position || DefaultTooltipPosition;
  return (
    <div className={`${styles.tooltip} ${isDarkMode ? styles.tooltipdark : styles.tooltiplight}`} style={{top: `${myPosition.y}px`, left: `${myPosition.x}px`}}>
      {myChild}
    </div>
  );
};
