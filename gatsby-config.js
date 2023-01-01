module.exports = {
  siteMetadata: {
    title: `Crit Fumble Gaming`,
    description: `Welcome to Crit Fumble Gaming! This site is for a VTTRPG group with players with some of the worst luck and dumbest ideas. We are based out of the Midwest United States, but also have players who live in other parts of the country.`,
    author: `Crit Fumble Gaming`,
    siteUrl: `https://www.crit-fumble.com/`,
  },
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
    DEV_WEBPACK_CACHE: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: false,
    LMDB_STORE: false
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    // `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-redux-material-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cf-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap',
        // excludes: []
      }
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Roboto`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-react-redux',
    //   options: {
    //     // [required] - path to your createStore module
    //     pathToCreateStoreModule: './src/state/createStore',
    //     // [optional] - options passed to `serialize-javascript`
    //     // info: https://github.com/yahoo/serialize-javascript#options
    //     // will be merged with these defaults:
    //     serialize: {
    //       space: 0,
    //       // if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
    //       // otherwise `JSON.parse` is used
    //       isJSON: true,
    //       unsafe: false,
    //       ignoreFunction: true
    //     },
    //     // [optional] - if true will clean up after itself on the client, default:
    //     cleanupOnClient: true,
    //     // [optional] - name of key on `window` where serialized state will be stored, default:
    //     windowKey: '__PRELOADED_STATE__'
    //   }
    // },
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
