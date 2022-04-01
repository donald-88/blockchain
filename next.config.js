/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}

module.exports = {
  experimental: {
    externalDir: true | {
        enabled: true,
        silent: true,
   },
}
};
