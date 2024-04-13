import 'server-only';

import request from '@/utils/request';

import type { New } from './model';

export const getNews = (params?: Record<string, any>) => {
  return request.get<New[]>('/list', {
    params,
    cacheTime: 0,
  });
};
