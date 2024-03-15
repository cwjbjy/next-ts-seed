import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/home/behavior">behavior Views</Link>
        ----------
        <Link href="/home/performance">performance Views</Link>
      </nav>
      <div>{children}</div>
    </>
  );
}
