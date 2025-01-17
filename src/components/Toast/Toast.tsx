import React from "react";
import { AlertOctagon, Info, X } from "react-feather";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  error: AlertOctagon,
};

interface ToastProps {
  children: React.ReactNode;
  variant: "notice" | "error";
  handleRemove: () => void;
}

export default function Toast({ children, variant, handleRemove }: ToastProps) {
  const Icon = ICONS_BY_VARIANT[`${variant}`];
  return (
    <div className={`${styles.toast} ${styles[`${variant}`]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden.Root>{variant} -</VisuallyHidden.Root> {children}
      </p>
      <button className={styles.closeButton} onClick={handleRemove}>
        <X size={24} />
      </button>
    </div>
  );
}
