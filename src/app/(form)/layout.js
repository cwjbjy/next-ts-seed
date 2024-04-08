import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <div className="p-5">
      <nav className="flex items-center justify-center gap-10 text-blue-600">
        <Link href="/about">About</Link>
        <Link href="/settings">Settings</Link>
      </nav>
      {children}
    </div>
  );
}
