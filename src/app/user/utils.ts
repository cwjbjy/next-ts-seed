import { cache } from 'react';

//模拟网络请求
async function getNews(): Promise<{ name: number; id: number }[]> {
  return new Promise((resolve) => {
    const num = Math.random();
    setTimeout(() => {
      resolve([
        {
          name: num,
          id: 1,
        },
        {
          name: 1233,
          id: 2,
        },
      ]);
    }, 1000);
  });
}

export const getItem = cache(async () => {
  const data = await getNews();
  return data;
});
