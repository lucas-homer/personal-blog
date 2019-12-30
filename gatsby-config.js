module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lucas Homer`,
        short_name: `Lucas`,
        start_url: `/`,
        background_color: `hsla(191, 74%, 98%, 1)`,
        theme_color: `hsla(191, 74%, 15%, 1)`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
  // Customize your site metadata:
  siteMetadata: {
    siteUrl: "https://lucashomer.com",
    title: `Lucas Homer`,
    author: `Lucas Homer`,
    description: `A place for thoughts and things.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/lucas_c_homer`,
      },
      {
        name: `github`,
        url: `https://github.com/lucas-homer`,
      },
    ],
  },
}
