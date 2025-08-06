"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { useInitApp } from "../_hooks/useInitApp";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  const { isClient } = useInitApp();

  if (!isClient) return null;
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "var(--font-reddit-mono), monospace",
          fontFamilyCode: "var(--font-reddit-mono), monospace",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs">
        <div className="xs:hidden">xs</div>
        <div className="hidden xs:block sm:hidden">sm</div>
        <div className="hidden sm:block md:hidden">md</div>
        <div className="hidden md:block lg:hidden">lg</div>
        <div className="hidden lg:block xl:hidden">xl</div>
        <div className="hidden xl:block 2xl:hidden">2xl</div>
        <div className="hidden 2xl:block">2xl+</div>
      </div>
    </ConfigProvider>
  );
}
