import React from "react";
import { AlertOctagon, CheckCircle, X } from "react-feather";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  toast,
  iconContainer,
  content,
  closeButton,
  success,
  error,
} from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  success: CheckCircle,
  error: AlertOctagon,
};

interface ToastProps {
  children: React.ReactNode;
  variant: "success" | "error";
  handleRemove: () => void;
}

export default function Toast({ children, variant, handleRemove }: ToastProps) {
  const Icon = ICONS_BY_VARIANT[`${variant}`];
  return (
    <div className={`${toast} ${variant}`}>
      <div className={iconContainer}>
        <Icon size={24} />
      </div>
      <p className={content}>
        <VisuallyHidden.Root>{variant} -</VisuallyHidden.Root> {children}
      </p>
      <button className={closeButton} onClick={handleRemove}>
        <X size={24} />
      </button>
    </div>
  );
}
