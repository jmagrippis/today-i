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

const Container = styled.div`
  padding: 0em 0.25em;
  font-size: 1.5em;
  line-height: 1.3em;
  margin-bottom: 1em;

  p {
    margin-bottom: 0.5em;
  }
`
const Header = styled.h1`
  font-size: 1.75em;
  line-height: 1.3em;
  margin-bottom: 0.25em;
`

export const ThanksPage = ({ data }) => {
  const { title } = data.site.siteMetadata
  const [latestPost] = data.allMarkdownRemark.edges

  return (
    <Layout
      siteTitle={title}
      postTitle="Thank you for your message"
      verb="thanked"
    >
      <SEO title="Thanks for your message" />
      <Container>
        <Header>Thanks!</Header>
        <p>
          Your message was successfully submitted. Thanks for reaching out! I
          will get back to you... eventually 💌
        </p>
        <p>
          In the meantime, how about reading{' '}
          <Link to={latestPost.node.fields.slug}>latest post</Link>?
        </p>
      </Container>
    </Layout>
  )
}

export default ThanksPage
