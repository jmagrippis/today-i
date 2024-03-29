/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 64, height: 64) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagram
          github
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em;
  font-size: 1.25em;
  background-color: #fcefd3;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 0.5em 0.5em 1.5em;

  @media (min-width: 701px) {
    margin: 0 0 1.5em 0;
  }
`

const StyledImage = styled(Image)`
  margin: 0 1em 0 0;
  border-radius: 50%;
  flex: 0 0 64px;
`

const Byline = styled.p`
  margin-bottom: 0.5em;
`

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata

      return (
        <Container>
          <StyledImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
          <div>
            <Byline>
              The adventures of intrepid engineer <strong>{author}</strong>, who
              travels the world and does stuff!
            </Byline>
            <p>
              Follow{' '}
              <a href={`https://www.instagram.com/${social.instagram}`}>
                on Instagram
              </a>
              , check out{' '}
              <a href={`https://github.com/${social.github}`}>the Github</a>!
            </p>
          </div>
        </Container>
      )
    }}
  />
)

export default Bio
