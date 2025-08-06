"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { BackButton } from "@/app/_components/BackButton";
import { Button, Form, Input, Row } from "antd";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams().toString();
  const onLogin = () => {
    router.push(`/auth/login?${searchParams}`);
  };
  
  return (
    <Form layout="vertical" className="w-full md:w-2/3">
      <Form.Item>
        <BackButton />
      </Form.Item>
      <Form.Item name="email" label="Email" required>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" required>
        <Input.Password />
      </Form.Item>
      <Form.Item name="confirmPassword" label="Confirm Password" required>
        <Input.Password />
      </Form.Item>
      <Row justify="space-between">
        <Form.Item>
          <Button type="link" className="!px-0" onClick={onLogin}>
            I already have an account
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}
