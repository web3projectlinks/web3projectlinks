"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};
const queryClient = new QueryClient();
export default function Provider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        // defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
