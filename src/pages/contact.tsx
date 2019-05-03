import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Form } from '../components/Form'

export const pageQuery = graphql`
  query {
    cover: file(absolutePath: { regex: "/mailbox.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
        social {
          instagram
          github
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
  margin-bottom: 0.1em;
`

const StyledImage = styled(Image)`
  margin-bottom: 1em;
`

export const ContactPage = ({ data }) => {
  const { title, social } = data.site.siteMetadata

  return (
    <Layout siteTitle={title} postTitle="Contact" verb="emailed">
      <SEO title="Contact" />
      <StyledImage fluid={data.cover.childImageSharp.fluid} alt="mailbox" />
      <Container>
        <Header>Contact</Header>
        <p>
          Sometimes it's not about following{' '}
          <a href={`https://www.instagram.com/${social.instagram}`}>the gram</a>
          , or filing an issue{' '}
          <a href="https://github.com/jmagrippis/today-i">on Github</a>.
        </p>
        <p>Sometimes it's about sending a message.</p>
        <p>And you can do just that, with this form!</p>
        <Form />
      </Container>
    </Layout>
  )
}

export default ContactPage
