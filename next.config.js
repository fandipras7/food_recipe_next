/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FOOD_RECIPE_API : 'http://localhost:4000/v1'
  },
  reactStrictMode: true,
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ["http://localhost:4000/img"],
//   },
// }
