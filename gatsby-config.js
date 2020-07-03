/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "RedXAV",
    titleTemplate: "%s · RedXAV",
    description: "RedXAV , News of Jav and Adult contents",
    url: "https://www.redxav.com",
    image: "static/images/snap.jpg",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RedXAV`,
        short_name: `RedXAV`,
        start_url: `/`,
        background_color: `#1A202C`,
        theme_color: `#9B0C19`,
        display: `standalone`,
        icon: `static/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
