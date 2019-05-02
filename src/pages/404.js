import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`

const Header = styled.h2`
  font-size: 1.5em;
  line-height: 1.3em;
  padding: 0.5em 0.25em;
`

const Body = styled.p`
  padding: 0.5em 0.25em;
  font-size: 1.25em;
  line-height: 1.3em;
  margin-bottom: 1em;
`

export const NotFound = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [latestPost] = data.allMarkdownRemark.edges

  return (
    <Layout location={location} siteTitle={siteTitle}>
      <SEO title="404: Not Found" />
      <Header>404: Not Found</Header>
      <Body>
        The page you're looking for does not exist... But this{' '}
        <Link to={latestPost.node.fields.slug}>latest post</Link> does!
      </Body>
    </Layout>
  )
}

export default NotFound
