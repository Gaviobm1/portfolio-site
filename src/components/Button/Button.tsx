import React from "react";
import { btn, btnText } from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  type = "submit",
  ...delegated
}: ButtonProps) {
  return (
    <button className={btn} type={type} {...delegated}>
      <span className={btnText}>{children}</span>
    </button>
  );
}
