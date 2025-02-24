import { defineEventHandler } from 'h3';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export default defineEventHandler(async event => {
  const query = await readBody<{ no: string }>(event);

  if (!query.no) {
    setResponseStatus(event, 400);
    return {
      message: 'No query parameter provided',
    };
  }

  const key = 'visit-records';

  try {
    const now = Date.now();

    const success = await redis.hset(key, {
      [`page:${query.no}`]: now,
    });

    return {
      success,
      message: 'Recorded last visit',
    };
  } catch (error) {
    setResponseStatus(event, 400);

    return {
      message: 'Something went wrong',
    };
  }
});
