import React from "react";
import { FormEventHandler } from "react";
import * as styles from "./Form.module.css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export default function Form({ children, onSubmit, ...delegated }: FormProps) {
  return (
    <form className={styles.wrapper} onSubmit={onSubmit} {...delegated}>
      {children}
    </form>
  );
}
