/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
	// Turbopack is default in Next 16; provide an empty config to silence webpack warning
	turbopack: {},
	experimental: {},
	output: "standalone", // Required for Docker production builds
};

export default nextConfig;
