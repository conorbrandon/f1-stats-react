import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./LoadingSpinner.module.css";
import Color from "color";

import { useInterval } from "usehooks-ts";
import { useOutletContext } from "react-router-dom";
import { AppOutletContext } from "../../App";

export type LoadingColorType = string;
interface LoadingSpinnerProps {
  color?: LoadingColorType,
  width?: string
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color, width }) => {
  const { isDarkMode } = useOutletContext<AppOutletContext>();
  const [progress, setProgress] = useState<number>(0);
  useInterval(() => {
    // console.log({ progress });
    // if (progress >= 100) setProgress(0);
    if (progress < 50) setProgress(progress + 1);
    else if (progress < 80) setProgress(progress + 0.5);
    else if (progress < 95) setProgress(progress + .2);
  }, 10);
  const myColor = Color(color || 'red');
  return (
    <>
      <div style={{width: width || '100%'}}>
        <div style={{
          width: `${progress}%`, 
          border: `3px solid`,
          borderImageSlice: 1,
          borderImageSource: `linear-gradient(to right, 
            ${isDarkMode ? myColor.darken(0.8).hex() : myColor.lighten(0.9).hex()}, 
            ${myColor.darken(1 - (progress / 100)).hex()})`
        }}></div>
        {/* <TailSpin color="red" height={'25%'} width={'25%'} wrapperClass={styles.loadingSpinner} /> */}
      </div>
    </>
  );
};
