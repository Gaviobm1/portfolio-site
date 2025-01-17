import React from "react";
import * as styles from "./TypeArea.module.css";

export interface TypeAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export default function TypeArea({ label, id, ...delegated }: TypeAreaProps) {
  return (
    <label htmlFor={id} className={styles.wrapper}>
      {label}
      <textarea
        name={id}
        id={id}
        className={styles.content}
        {...delegated}
      ></textarea>
    </label>
  );
}
