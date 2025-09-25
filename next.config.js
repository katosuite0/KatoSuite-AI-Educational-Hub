/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['katosuite.com', 'katosuiteai.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          }
        ],
      },
    ]
  },
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
