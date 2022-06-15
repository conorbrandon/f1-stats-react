import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./LoadingSpinner.module.css";

import { useInterval } from "usehooks-ts";

export type LoadingColorType = string;
interface LoadingSpinnerProps {
  color?: LoadingColorType
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color }) => {
  const [progress, setProgress] = useState<number>(0);
  useInterval(() => {
    console.log({ progress });
    if (progress >= 100) setProgress(0);
    else if (progress < 50) setProgress(progress + 1.2);
    else if (progress < 80) setProgress(progress + 1);
    else if (progress < 100) setProgress(progress + .5);
  }, 10);
  return (
    <>
      <div style={{width: '100%'}}>
        <div style={{borderTop: `solid 5px ${color || 'red'}`, width: `${progress}%`}}></div>
        {/* <TailSpin color="red" height={'25%'} width={'25%'} wrapperClass={styles.loadingSpinner} /> */}
      </div>
    </>
  );
};
