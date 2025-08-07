"use client";

import { Button, Form, Input, Row } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const onRegister = () => {
    router.push(`/auth/register?${searchParams.toString()}`);
  };
  const onGuest = () => {
    router.push(`/auth/login-as-guest?${searchParams.toString()}`);
  };

  const onLogin = () => {
    const redirect = searchParams.get("redirect");
    if (!redirect) return router.push("/");
    router.push(redirect);
  };

  return (
    <div className="h-screen w-screen fixed justify-center items-center flex md:flex-row flex-col gap-4 p-4">
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
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
}
