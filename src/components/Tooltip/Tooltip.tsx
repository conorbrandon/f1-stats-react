import React from "react";
import { DefaultTooltipPosition, TooltipPosition } from "../../App";
import styles from "./Tooltip.module.css";

interface TooltipProps {
  child?: JSX.Element,
  position?: TooltipPosition
}

export const Tooltip: React.FC<TooltipProps> = ({ child, position }) => {
  const myChild = child || <></>;
  const myPosition = position || DefaultTooltipPosition;
  return (
    <div className={styles.tooltip} style={{top: `${myPosition.y}px`, left: `${myPosition.x}px`}}>
      {myChild}
    </div>
  );
};
