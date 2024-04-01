import { getItem } from './utils';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getItem();
  return (
    <section>
      {data.map((o) => (
        <div key={o.id}>{o.name}</div>
      ))}
      ------{children}
    </section>
  );
}
