import React from "react";
import { wrapper, content } from "./Input.module.css";
import { InputProps } from "@/types/types";

export default function Input({
  label,
  id,
  type = "text",
  ...delegated
}: InputProps) {
  return (
    <label htmlFor={id} className={wrapper}>
      {label}
      <input type={type} id={id} name={id} {...delegated} className={content} />
    </label>
  );
}
