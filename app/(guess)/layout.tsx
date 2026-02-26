// Removed imports as Header and Footer are handled in root layout

export default function GuestLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col h-screen mx-auto max-w-7xl">
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}