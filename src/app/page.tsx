async function getData() {
  const data = await fetch('https://localhost:3001/api');
  return data.json();
}

export default async function Home() {
  const data = await getData();
  return <article>{data.name}</article>;
}
