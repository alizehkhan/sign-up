import React, {
  FormEvent,
  InputHTMLAttributes,
  Ref,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { IconAlertCircle } from "@tabler/icons-react";

import styles from "./input.module.css";

type InputProps = {
  id: string;
  children: string;
  customErrorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (
    { id, children, customErrorMessage, ...restProps }: InputProps,
    ref?: Ref<HTMLInputElement>
  ) => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    useEffect(() => setErrorMessage(customErrorMessage), [customErrorMessage]);

    const handleInvalid = (event: FormEvent<HTMLInputElement>) => {
      event.preventDefault();

      const validity = event.currentTarget.validity;
      setErrorMessage(
        validity.valueMissing
          ? "This field is required"
          : event.currentTarget.type === "email" && validity.typeMismatch
          ? "Please enter a valid email address"
          : event.currentTarget.validationMessage
      );
    };

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          {children}
        </label>
        <input
          className={styles.input}
          aria-describedby={`${id}-error`}
          ref={ref}
          id={id}
          name={id}
          autoComplete="off"
          {...restProps}
          onInvalid={handleInvalid}
          onInput={() => setErrorMessage("")}
        />
        {errorMessage && (
          <span className={styles.error} id={`${id}-error`}>
            <IconAlertCircle aria-label="error" color="#f03e3e" size={14} />
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
