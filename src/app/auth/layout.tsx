import { CenteredLayout } from "../_layouts/CenteredLayout";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <CenteredLayout>{children}</CenteredLayout>;
}