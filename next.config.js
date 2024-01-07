/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname:'/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**'
            },
            {
                protocol: 'https',
                hostname: 'robohash.org',
                port: '',
                pathname:'**'
            },
        ]
    }
}

module.exports = nextConfig
