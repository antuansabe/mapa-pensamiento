// src/components/ThemeProviderWrapper.js
"use client";
import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}