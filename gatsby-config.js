module.exports = {
  pathPrefix: "/eefreddy.github.io",
  siteMetadata: {
    title: 'Emmanuel Freddy',
    author: 'Emmanuel Freddy',
    description: 'A portfolio to improve my front end skills',
  },
  plugins: [
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
        icon: 'src/images/helmet.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
