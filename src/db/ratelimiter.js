import rateLimit from 'express-rate-limit';

// set up rate limiter: maximum of 30 requests per minute
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30,
  message: 'You have exceeded the 30 requests in 1 minute limit!',
  headers: true,
});

export default limiter;