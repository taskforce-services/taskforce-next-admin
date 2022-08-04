/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  /**
   * Tell Next.js where the `public` folder is.
   * Replace `nextjs-github-pages` with your Github repo project name.
   */
  assetPrefix: isProd ? "/taskforce-next-admin/" : "",
  env: {
    NEXT_PUBLIC_PIPEDREAM_API_URL: process.env.NEXT_PUBLIC_PIPEDREAM_API_URL,
    ENVIRONMENT: process.env.ENVIRONMENT,
  },
};
