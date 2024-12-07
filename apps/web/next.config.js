/** @type {import('next').NextConfig} */
module.exports = {
	images: {
		remotePatterns: [
			{ hostname: 'github.com' },
			{ hostname: 'avatars.githubusercontent.com' },
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/u/**',
			},
		],
	},
}
