"use client";

import { BackButton } from "@/app/_components/BackButton";
import { Button, Form, Input, Row } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginAsGuestPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const onLoginAsGuest = () => {
    const redirect = searchParams.get("redirect");
    if (!redirect) return router.push("/");
    router.push(redirect);
  };

  return (
    <Form
      layout="vertical"
      className="sm:w-1/2 w-full"
      form={form}
      onFinish={onLoginAsGuest}
    >
      <Form.Item>
        <BackButton />
      </Form.Item>
      <Form.Item name="name" label="Your name is" required>
        <Input />
      </Form.Item>

      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}
