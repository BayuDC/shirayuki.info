import { defineEventHandler } from 'h3';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export default defineEventHandler(async event => {
  const key = 'visit-records';
  try {
    const visits = await redis.hgetall(key);

    if (!visits) {
      return { visits: [] };
    }

    return { visits };
  } catch (error) {
    setResponseStatus(event, 400);

    return {
      message: 'Something went wrong',
    };
  }
});
