export default ({ env }: { env: any }) => ({
  "padma-backend": {
    enabled: true,
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
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["role"],
      },
    },
  },
  email: {
    config: {
      provider: env("EMAIL_PROVIDER"),
      providerOptions: {
        apiKey: env("BREVO_API_KEY"),
      },
      settings: {
        defaultSenderEmail: env("EMAIL_EMAIL"),
        defaultSenderName: env("EMAIL_NAME"),
        defaultReplyTo: env("EMAIL_EMAIL"),
      },
    },
  },
});
