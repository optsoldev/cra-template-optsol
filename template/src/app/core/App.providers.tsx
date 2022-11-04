import React, { PropsWithChildren } from "react";
import { OptLayoutProvider } from "@optsol/react";
import { theme } from "../../core/theme";

const AppProviders = ({ children }: PropsWithChildren) => {
  return <OptLayoutProvider theme={theme}>{children}</OptLayoutProvider>;
};

export default AppProviders;
