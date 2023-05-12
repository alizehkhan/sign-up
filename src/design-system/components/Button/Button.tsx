import React from "react";
import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";

import Spinner from "../Spinner/Spinner";

import styles from "./button.module.css";

type ButtonProps = {
  isLoading?: boolean;
  children: ReactNode;
} & (
  | ({ as: "a" } & LinkProps)
  | ({ as: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
);

const Button = forwardRef(
  (
    { as, isLoading, children, ...restProps }: ButtonProps,
    ref?: Ref<HTMLAnchorElement & HTMLButtonElement>
  ) => {
    const Element = as === "a" ? Link : as;

    return (
      // @ts-ignore
      <Element
        className={`${styles.button} ${isLoading ? styles.loading : ""}`}
        disabled={isLoading}
        {...restProps}
        ref={ref}
      >
        {isLoading ? <Spinner /> : children}
      </Element>
    );
  }
);

export default Button;
