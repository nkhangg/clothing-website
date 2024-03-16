/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['zwin.io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;
