/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["i.postimg.cc"],
    loader:"custom",
    path:'/' 
  }
}

module.exports = nextConfig
