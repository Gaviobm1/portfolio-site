import React from "react";
import * as styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...delegated }: ButtonProps) {
  return (
    <button className={styles.btn} {...delegated}>
      <span className={styles.btnText}>{children}</span>
    </button>
  );
}
