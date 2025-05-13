const dotenv = require("dotenv")
const path = require("path")

// Load the .env file from the root directory manually
dotenv.config({ path: path.resolve(__dirname, "..", ".env") })

module.exports = {
   env: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      STRAPI_AUTH_TOKEN: process.env.STRAPI_AUTH_TOKEN,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
   },
   images: {
      remotePatterns: [
         {
            protocol: "https" || "http",
            hostname: "res.cloudinary.com"
         },
         {
            protocol: "https" || "http",
            hostname: "ui-avatars.com"
         },
         {
            protocol: "https" || "http",
            hostname: "via.placeholder.com"
         },
         {
            protocol: "https" || "http",
            hostname: "placehold.co"
         }
      ]
   }
}
