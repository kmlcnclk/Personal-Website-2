const { SERVER_DIRECTORY } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  return {
    env: {
      AIRTABLE_API_KEY: 'keypq5uBKI7JeuxYC',
      AIRTABLE_BASE_ID: 'appVF7u8oAqhV7eBU',
      RAINDROP_ACCESS_TOKEN: 'a2fd0585-1dc4-4404-a6de-2ee4be8a01d8',
    },
    images: {
      domains: ['dl.airtable.com'],
      deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
  };
};
