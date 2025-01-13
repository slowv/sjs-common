import React from "react";

export interface ProviderProps {
  children: React.ReactNode;
  config: SLVConfig
}

export interface SLVConfig {
  version: string,
  applicationName: string,
  port: string | undefined,
  host: string
}

export const SLVProvider = ({children}: ProviderProps) => {
  return (
    <>{children}</>
  );
}
