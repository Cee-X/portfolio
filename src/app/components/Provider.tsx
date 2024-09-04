"use client";
import * as React from "react";
import { ThemeProvider } from "next-themes";

type Props = {
  children?: React.ReactNode;
};

export function Provider({children}:Readonly<{children:React.ReactNode;}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}