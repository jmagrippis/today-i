module.exports = {
  siteMetadata: {
    title: 'Today I [verb]',
    author: 'Johnny Magrippis',
    description: 'Documenting my adventures in tech and life in general',
    siteUrl: 'https://today-i.netlify.com/',
    social: {
      twitter: 'jmagrippis',
      instagram: 'jmagrippis',
      github: 'jmagrippis',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-reading-time',
          'gatsby-plugin-typescript',
          'gatsby-plugin-styled-components',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        //trackingId: 'ADD YOUR TRACKING ID HERE',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Today I [verb] by Johnny Magrippis',
        short_name: 'Today I...',
        start_url: '/',
        background_color: '#f7f9f4',
        theme_color: '#e4572e',
        display: 'minimal-ui',
        icon: 'content/assets/app-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
