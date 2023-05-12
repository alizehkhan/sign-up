import React from "react";
import { Helmet } from "react-helmet";
import { ErrorBoundary } from "react-error-boundary";

import { SignUpForm } from "../modules";
import Layout from "../templates/Layout";

import styles from "./sign-up.module.css";

export function SignUp() {
  return (
    <>
      <Helmet>
        <title>Register | Splitify</title>
      </Helmet>
      <Layout>
        <h1 className={styles.title}> Create your account</h1>
        <p className={styles.subtitle}>
          Join our community of happy users and simplify your bill splitting
          experience!
        </p>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <SignUpForm />
        </ErrorBoundary>
      </Layout>
    </>
  );
}
