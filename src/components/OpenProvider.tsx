import { set } from "lodash";
import React from "react";

export type OpenContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const OpenContext = React.createContext<OpenContextType | null>(null);

export default function OpenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  const values = {
    open,
    setOpen,
  };

  return <OpenContext.Provider value={values}>{children}</OpenContext.Provider>;
}
