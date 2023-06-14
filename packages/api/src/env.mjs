import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  server: {
    NEXTJS_URL: z.preprocess(
      (str) =>
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : str,
      process.env.VERCEL_URL ? z.string().min(1) : z.string().url(),
    ),

    STRIPE_API_KEY: z.string(),
    STRIPE_STD_PRODUCT_ID: z.string(),
    STRIPE_STD_MONTHLY_PRICE_ID: z.string(),
    STRIPE_PRO_PRODUCT_ID: z.string(),
    STRIPE_PRO_MONTHLY_PRICE_ID: z.string(),
  },
  runtimeEnv: {
    NEXTJS_URL: process.env.NEXTJS_URL,

    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    STRIPE_STD_PRODUCT_ID: process.env.STRIPE_STD_PRODUCT_ID,
    STRIPE_STD_MONTHLY_PRICE_ID: process.env.STRIPE_STD_MONTHLY_PRICE_ID,
    STRIPE_PRO_PRODUCT_ID: process.env.STRIPE_PRO_PRODUCT_ID,
    STRIPE_PRO_MONTHLY_PRICE_ID: process.env.STRIPE_PRO_MONTHLY_PRICE_ID,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
