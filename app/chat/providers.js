"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import Next13ProgressBar from "next13-progressbar";

export default function ChatProviders({ session, children }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
      <Next13ProgressBar />
    </SessionProvider>
  );
}
