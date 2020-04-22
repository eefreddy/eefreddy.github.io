module.exports = {
  siteMetadata: {
    title: 'Emmanuel Freddy | Software Engineer - Growth',
    author: 'Emmanuel Freddy',
    description: "Hi I'm Freddy, a software engineer in Toronto.",
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
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 'TN238',
      },
    },
    'gatsby-plugin-sass',
  ],
}
