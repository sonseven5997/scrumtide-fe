"use client";
import { Card } from "antd";

export default function PokerItem() {
  return (
    <div>
      <Card className="flex flex-1 aspect-4/7 rounded-lg items-center justify-center">
        <div className="text-2xl font-bold">1</div>
      </Card>
      <div className="text-center">Son</div>
    </div>
  );
}
