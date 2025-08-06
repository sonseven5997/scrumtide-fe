"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  const onBack = () => {
    router.back();
  };
  return (
    <Button type="link" className="!px-0" onClick={onBack}>
      <ArrowLeftOutlined />
      Back
    </Button>
  );
}
