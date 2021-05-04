  require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Andrew Ramirez`,
    siteTitleAlt: `Andrew Ramirez`,
    siteHeadline: `Andrew Ramirez`,
    siteDescription: `Personal Portfolio for Andrew Ramirez`,
    siteImage: `./logo.jpg`,
    author: `@drewbyts`,
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
        basePath: `/`,
        prismPreset: `prism-` 
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrew Ramirez`,
        short_name: `Andrew Ramirez`,
        description: `Andrew Ramirez Personal Website`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/content/pages/about/yosemite-me.jpeg`,
            sizes: `192x192`,
            type: `image/jpeg`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-theme-ui`,
  ],
}
