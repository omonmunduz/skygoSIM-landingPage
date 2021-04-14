module.exports = {
  siteMetadata: {
    title: `Global Data for SIM and eSIM`,
    description: `Worldwide data plans.Global data for SIM and eSIM. Prepare for high-speed internet.`,
    author: `Omur Nazar`,
    siteUrl:'http://www.skygosim.netlify.app',
    keywords:['Skygo SIM', 'Skygo eSIM', 'Skygo data packages', 'Skygo internet', 'Global Travel Telecom', 'GTT' , 'eSIM', 'Global SIM', 'Global Data plans', 'Internet', 'Cheap internet', 'Telecommunications',
    'USA connection', 'Global conection', 'Worldwide Internet', 'Japan connection', 'Mobile Data'],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
