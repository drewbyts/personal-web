require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Andrew Ramirez`,
      author: '@drewbyts',
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Projects`, slug: `/projects` },
          
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },

    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrew Ramirez`,
        short_name: `andrew`,
        description: `Andrew Ramirez's personal website and portfolio`,
        start_url: `/`,
        background_color: `#FFFFF`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/content/pages/about/Dec-4-Big Sur.jpg`,
            sizes: `192x192`,
            type: `image/jpg`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
