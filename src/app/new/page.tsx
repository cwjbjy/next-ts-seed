'use client';

import { useSearchParams } from 'next/navigation';

export default function New() {
  const searchParams = useSearchParams();

  return <>Search: {searchParams.get('id')}</>;
}
