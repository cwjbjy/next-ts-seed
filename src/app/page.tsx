import { getNews } from '@/apis/api';

export default async function Home() {
  const list = await getNews();
  return (
    <article>
      {list.map((o: any) => (
        <div key={o.id}>{o.name}</div>
      ))}
    </article>
  );
}
