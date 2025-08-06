"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen fixed justify-center items-center flex md:flex-row flex-col gap-4 p-4">
      <Button className="md:w-full max-w-100 !h-50" onClick={() => router.push("/planning-poker/123")}>
        Planning Poker
      </Button>
      <Button className="md:w-full max-w-100 !h-50" onClick={() => router.push("/retrospective/123")}>
        Retrospective
      </Button>
    </div>
  );
}
