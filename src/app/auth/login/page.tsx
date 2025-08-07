"use client";

import { useLogin } from "@/app/_hooks/auth";
import { Button, Form, Input, Row } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const mutationLogin = useLogin();
  const onRegister = () => {
    router.push(`/auth/register?${searchParams.toString()}`);
  };
  const onGuest = () => {
    router.push(`/auth/login-as-guest?${searchParams.toString()}`);
  };

  const onLogin = () => {
    mutationLogin.mutate({
      email: form.getFieldValue("email"),
      password: form.getFieldValue("password"),
    });
  };

  return (
    <Form
      layout="vertical"
      className="sm:w-1/2 w-full"
      form={form}
      onFinish={onLogin}
    >
      <Form.Item name="email" label="Email" required>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" required>
        <Input.Password />
      </Form.Item>
      <Row justify="space-between">
        <Row className="gap-4">
          <Button type="link" className="!px-0" onClick={onRegister}>
            Register
          </Button>
          <Button type="link" className="!px-0" onClick={onGuest}>
            I&apos;m a guest
          </Button>
        </Row>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={mutationLogin.isPending}
          >
            Login
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}
