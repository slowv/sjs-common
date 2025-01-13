import React from "react";

export interface ProviderProps {
  children: React.ReactNode;
  config: {
    version: string
  }
}

export const SLVProvider = ({children}: ProviderProps) => {
  return (
    <>{children}</>
  );
}
