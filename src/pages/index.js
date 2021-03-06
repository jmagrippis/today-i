import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { PostTeaser } from '../components/PostTeaser'
import { BannerLink } from '../components/BannerLink'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            verb
            cover {
              childImageSharp {
                fluid(maxWidth: 640, maxHeight: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} siteTitle={siteTitle}>
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      <Bio />
      {posts.map(({ node }) => (
        <PostTeaser key={node.fields.slug} {...node} />
      ))}
      <BannerLink path="/contact/">contact</BannerLink>
    </Layout>
  )
}

export default BlogIndex
