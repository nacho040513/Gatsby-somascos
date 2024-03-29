module.exports = {
  siteMetadata: {
    title: "Vocación Somascos",
    author: "Ignacio Mendez",
    description: "A Gatsby.js Starter based on Stellar by HTML5 UP"
  },
  plugins: [
    'gatsby-remark-responsive-iframe',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
