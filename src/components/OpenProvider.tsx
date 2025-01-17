import { set } from "lodash";
import React from "react";

export type OpenContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toast: string;
  setToast: React.Dispatch<React.SetStateAction<string>>;
};

export const OpenContext = React.createContext<OpenContextType | null>(null);

export default function OpenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState("");

  const values = {
    open,
    setOpen,
    toast,
    setToast,
  };

  return <OpenContext.Provider value={values}>{children}</OpenContext.Provider>;
}
