import React from "react";
import { FormEventHandler } from "react";
import { wrapper } from "./Form.module.css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export default function Form({ children, onSubmit, ...delegated }: FormProps) {
  return (
    <form className={wrapper} onSubmit={onSubmit} {...delegated}>
      {children}
    </form>
  );
}
