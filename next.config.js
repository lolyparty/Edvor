/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    domains:["https://fakestoreapi.com"],
    loader:"custom",
    path:'/' 
  }
}

module.exports = nextConfig
