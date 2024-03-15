'use client';

import { Suspense } from 'react';

import { useSearchParams } from 'next/navigation';

function New() {
  const searchParams = useSearchParams();

  return <Suspense>Search: {searchParams.get('id')}</Suspense>;
}

export default function Page() {
  return (
    <Suspense>
      <New />
    </Suspense>
  );
}
