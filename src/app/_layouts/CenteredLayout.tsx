export function CenteredLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen fixed justify-center items-center flex md:flex-row flex-col gap-4 p-4">
      {children}
    </div>
  );
}
