import React, { HTMLAttributes, ReactNode, Ref, forwardRef } from "react";

import styles from "./container.module.css";

type ContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Container = forwardRef(
  ({ children }: ContainerProps, ref?: Ref<HTMLDivElement>) => (
    <div className={styles.container} ref={ref}>
      {children}
    </div>
  )
);

export default Container;
