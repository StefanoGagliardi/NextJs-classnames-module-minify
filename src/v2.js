// console.log("Call this file on AppStart one time");
const { join, relative } = require('path')
const CSS_LOADER_MATCH = join("compiled", "css-loader", "cjs.js");
module.exports = (phase, { defaultConfig }) => {
  // console.log("Default Config: ", defaultConfig);

  return {
    ...defaultConfig,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      console.log("Webpack config - dev:", dev);
      console.log("Webpack config - isServer:", isServer);

      // Enable just in production
      // if(dev) return config;

      // if(!webpack.module) return config;
      // console.log("webpack: ", config);
      // console.log("webpack: ", config.module);
      if (!Array.isArray(config.module.rules)) return config;
      for (const { oneOf } of config.module.rules) {
        if (Array.isArray(oneOf))
          for (let i = 0; i < oneOf.length; i++) {
            const { sideEffects, use } = oneOf[i];
            if (
              typeof sideEffects !== "undefined" &&
              sideEffects === false &&
              Array.isArray(use)
            ) {

              for (const { loader, options } of use)
                if (
                  loader.endsWith(CSS_LOADER_MATCH) &&
                  typeof options.modules === "object"
                )
                console.log("getLocalIdent: ", options.modules.getLocalIdent);
                  // options.modules.getLocalIdent = getLocalIdent;
            }
          }
        // for(const {sideEffects, use} of oneOf) {
        //   consaole.log("oneOf: ", oneOf)
        // }

        // if (sideEffects && sideEffects === false && Array.isArray(use)) {
        // }
      }

      return config;
    },
  };
};
