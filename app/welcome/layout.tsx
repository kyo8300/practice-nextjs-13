import Link from "next/link";

interface WelcomeLayoutProps {
  children: React.ReactNode;
}

export default async function WelcomeLayout({ children }: WelcomeLayoutProps) {
  return (
    <div>
      <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
        <nav>
          <Link href="/welcome/hello">Hello</Link>
        </nav>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
}
