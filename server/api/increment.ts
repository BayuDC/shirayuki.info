import { defineEventHandler } from 'h3';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export default defineEventHandler(async () => {
  const identifier = 'api_call_counter';

  try {
    const count = await redis.incr(identifier);

    const lastCalled = await redis.get('last_called');
    const lastCalledAt = lastCalled || 'Never';

    await redis.set('last_called', new Date().toISOString());

    return {
      success: true,
      count: count,
      lastCalled: lastCalledAt,
    };
  } catch (error) {
    console.error('Redis error:', error);
    return {
      success: false,
      message: 'Error interacting with Redis',
    };
  }
});
