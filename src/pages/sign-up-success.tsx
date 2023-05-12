import React, { useContext } from "react";
import { Button } from "@design-system";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import Layout from "../templates/Layout";

import styles from "./sign-up-success.module.css";

export function SignUpSuccess() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Helmet>
        <title>Confirmation | Splitify</title>
      </Helmet>
      <Layout>
        <h1 className={styles.title}>Create your account</h1>
        <p className={styles.subtitle}>
          We've emailed you a confirmation link to <strong>{user}</strong>. Once
          verified, you will be able to access your Splitify dashboard.
        </p>
        <div className={styles.button}>
          <Button as="a" to="/sign-in">
            Log in to your account
          </Button>
        </div>
        <p className={styles.helperText}>
          Didn't receive an email? Check your spam folder or{" "}
          <Link to="/resend-confirmation-email">resend email</Link>.
        </p>
      </Layout>
    </>
  );
}
