module.exports = {
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    USER_ID: process.env.USER_ID,
    GOOGLE_ANALYTICS: {
      UA_TRACKING_ID: process.env.UA_TRACKING_ID,
      GA4_TRACKING_ID: process.env.GA4_TRACKING_ID,
    },
  },
};
