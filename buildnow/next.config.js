/** @type {import('next').NextConfig} */

// next.config.js
module.exports = {
  // experimental: {
  //   appDir: true,
  // },
  compiler: {
    styledComponents: true,
  },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
  
