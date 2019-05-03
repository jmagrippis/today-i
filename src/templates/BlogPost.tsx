import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Small } from '../components/Small'
import { BannerLink } from '../components/BannerLink'

const StyledImage = styled(Image)`
  margin-bottom: 1.5em;
`

const Container = styled.div`
  padding: 0 0.25em;
`

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
`

const Body = styled.div`
  font-size: 1.5em;
  line-height: 1.3em;
  margin-bottom: 1em;

  p {
    margin-bottom: 0.5em;
  }

  h2 {
    font-size: 1.1em;
    line-height: 1.3em;
    border-bottom: 1px solid;
    margin: 0.5em 0 0.75em;
  }

  ul {
    list-style-type: disc;
    padding-left: 1em;
  }

  code {
    font-size: 0.75em;
  }

  img {
    display: block;
    margin: 1em auto;
    max-width: 100%;
  }
`

const OtherPosts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const BlogPost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout
      siteTitle={siteTitle}
      postTitle={post.frontmatter.title}
      verb={post.frontmatter.verb}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <StyledImage
        fluid={post.frontmatter.cover.childImageSharp.fluid}
        alt={post.frontmatter.title}
      />
      <Container>
        <H1>{post.frontmatter.title}</H1>
        <Small
          date={post.frontmatter.date}
          readingTime={post.fields.readingTime.text}
        />
        <Body dangerouslySetInnerHTML={{ __html: post.html }} />
        <Bio />
        <OtherPosts>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </OtherPosts>
      </Container>
      <BannerLink path="/contact/">contact</BannerLink>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        verb
        cover {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
