/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //agar bisa make image dari internet harus di daftarin dulu hostname nya
    domains: ["upload.wikimedia.org"]
  }
}

module.exports = nextConfig
