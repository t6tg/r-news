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
    url: "https://www.redxav.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [`gatsby-plugin-postcss`],
}
