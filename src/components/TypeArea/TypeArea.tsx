import React from "react";
import { wrapper, content } from "./TypeArea.module.css";

export interface TypeAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export default function TypeArea({ label, id, ...delegated }: TypeAreaProps) {
  return (
    <label htmlFor={id} className={wrapper}>
      {label}
      <textarea name={id} id={id} className={content} {...delegated}></textarea>
    </label>
  );
}
