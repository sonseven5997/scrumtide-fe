import { CenteredLayout } from "@/app/_layouts/CenteredLayout";

export default function PlanningPokerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CenteredLayout>{children}</CenteredLayout>;
}
