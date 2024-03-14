import { Suspense } from 'react';

import { Spin } from 'antd';

import List from './components/list';

export default function Home() {
  return (
    <article>
      我是首页
      <Suspense fallback={<Spin />}>
        <List />
      </Suspense>
    </article>
  );
}
