import React, { FormEvent, useContext, useRef, useState } from "react";
import { Button, Input } from "@design-system";
import { useNavigate } from "react-router";

import { AuthContext } from "../../context/AuthContext";

import styles from "./sign-up-form.module.css";

const SignUpForm = () => {
  const formRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [customEmailError, setCustomEmailError] = useState<
    string | undefined
  >();
  const [errorBannerMessage, setErrorBannerMessage] = useState<
    string | undefined
  >();

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<EventTarget>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(formRef.current ?? undefined);

    try {
      const response = await fetch("/submit", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.ok) {
        const user = Object.fromEntries(formData).email.toString();
        setUser(user);
        navigate("success");
      } else {
        const data = await response.json();
        if (data?.error?.email) {
          setCustomEmailError(data.error.email);
        } else {
          setErrorBannerMessage(
            "⚠️ Oops, something went wrong. Please try again"
          );
        }
      }
    } catch (error: any) {
      if (
        error.message === "Timeout" ||
        error.message === "Network request failed"
      ) {
        setErrorBannerMessage(
          "⚠️ Oops, please check your internet connection."
        );
      } else {
        setErrorBannerMessage(
          "⚠️ Oops, something went wrong. Please try again"
        );
      }
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className={styles.inputPair}>
        <Input required id="first_name" placeholder="First name">
          First name
        </Input>
        <Input required id="last_name" placeholder="Last name">
          Last name
        </Input>
      </div>
      <Input
        required
        id="email"
        type="email"
        customErrorMessage={customEmailError}
        placeholder="example@mail.com"
      >
        Email address
      </Input>
      <div className={styles.button}>
        <Button as="button" isLoading={isLoading} type="submit">
          Create account
        </Button>
      </div>
      {errorBannerMessage && (
        <p className={styles.error}>{errorBannerMessage}</p>
      )}
    </form>
  );
};

export default SignUpForm;
