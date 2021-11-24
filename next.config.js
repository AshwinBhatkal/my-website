module.exports = {
  env: {
    EMAIL_JS: {
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      USER_ID: process.env.USER_ID,
    },
    GOOGLE_ANALYTICS: {
      GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
    },
  },
};
