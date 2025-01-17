import React from "react";
import { OpenContext, OpenContextType } from "component/OpenProvider";

export default function useOpenContext(): OpenContextType {
  const context = React.useContext(OpenContext);
  if (!context) {
    throw new Error("useOpenContext must be used within an OpenProvider");
  }
  return context;
}
