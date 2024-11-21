/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            // {
            //     source: '/',
            //     destination: '/',
            //     permanent: false
            // },
            // {
            //     source: '/loading',
            //     destination: '/redirect',
            //     permanent: false
            // },
            // {
            //     source: '/users/:userid',
            //     destination: '/redirect',
            //     permanent: false
            // }
        ]
    }
};

export default nextConfig;
