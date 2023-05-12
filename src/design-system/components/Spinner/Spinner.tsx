import React from "react";
import { Ref, SVGAttributes, forwardRef } from "react";

import styles from "./spinner.module.css";

interface SpinnerProps extends SVGAttributes<SVGSVGElement> {}

const Spinner = forwardRef((props: SpinnerProps, ref?: Ref<SVGSVGElement>) => {
  return (
    <div className={styles.spinner} data-testid="spinner">
      <svg {...props} ref={ref} width="24" height="24" viewBox="0 0 24 24">
        <clipPath id="clip">
          <path d="M12 4.50016C7.49336 4.50016 3.84 8.15351 3.84 12.6602C3.84 17.1668 7.49336 20.8202 12 20.8202C16.5066 20.8202 20.16 17.1668 20.16 12.6602C20.16 8.15351 16.5066 4.50016 12 4.50016ZM0 12.6602C0 6.03274 5.37258 0.660156 12 0.660156C18.6274 0.660156 24 6.03274 24 12.6602C24 19.2876 18.6274 24.6602 12 24.6602C5.37258 24.6602 0 19.2876 0 12.6602Z" />
        </clipPath>
        <foreignObject
          x="0"
          y="0"
          width="100"
          height="100"
          clipPath="url(#clip)"
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundImage: "conic-gradient(rgba(25, 52, 51, 0), #193433)",
            }}
          />
        </foreignObject>
      </svg>
    </div>
  );
});

export default Spinner;
