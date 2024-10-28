module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
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
  name: "strapi::body",
  config: {
    formLimit: "256mb", // modify form body
    jsonLimit: "256mb", // modify JSON body
    textLimit: "256mb", // modify text body
    formidable: {
      maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
    },
  },

  "google-maps": {
    enabled: true,
  },
  "location-field": {
    enabled: true,
    config: {
      fields: ["photo", "rating"], // optional
      // You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
      googleMapsApiKey: env("GOOGLE_MAPS_API_KEY"),
      // See https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
      autocompletionRequestOptions: {},
    },
  },
  seo: {
    enabled: true,
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  "react-icons": true,

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
