async function getProjects(): Promise<{ name: string; id: number }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'zhang',
          id: 1,
        },
        {
          name: 'li',
          id: 2,
        },
      ]);
    }, 1000);
  });
}

export default async function List() {
  const projects = await getProjects();
  return (
    <div className="App">
      {projects.map((o: any) => (
        <div key={o.id}>{o.name}</div>
      ))}
    </div>
  );
}
