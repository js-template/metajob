export default ({ env }) => ({
  "padma-backend": {
    enabled: true,
    // resolve: "./src/plugins/padma-backend",
  },
    "metajob-backend": {
    enabled: true,
    //resolve: "./src/plugins/metajob-backend",
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
