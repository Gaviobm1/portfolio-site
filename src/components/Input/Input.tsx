import React from "react";
import * as styles from "./Input.module.css";
import { InputProps } from "@/types/types";

export default function Input({
  label,
  id,
  type = "text",
  ...delegated
}: InputProps) {
  return (
    <label htmlFor={id} className={styles.wrapper}>
      {label}
      <input
        type={type}
        id={id}
        name={id}
        {...delegated}
        className={styles.content}
      />
    </label>
  );
}
