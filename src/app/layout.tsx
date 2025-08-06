"use client";

import "@ant-design/v5-patch-for-react-19";
import { Reddit_Mono } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "./_providers/GlobalProvider";

const redditMono = Reddit_Mono({
  variable: "--font-reddit-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redditMono.variable}`}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
