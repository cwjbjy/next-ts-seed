'use client';

import { useParams } from 'next/navigation';

export default function Blog() {
  const params = useParams();
  return <div>{params.id}博客页面</div>;
}
