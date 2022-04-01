/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "pixabay.com", "cdn.pixabay.com", "images.unsplash.com", "res.cloudinary.com"
        ]
    }

}

module.exports = nextConfig