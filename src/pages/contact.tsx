import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Form from '../components/Form'

export const pageQuery = graphql`
  query {
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
  margin-bottom: 0.25em;
`

export const ContactPage = ({ data, location }) => {
  const { title, social } = data.site.siteMetadata

  return (
    <Layout
      location={location}
      siteTitle={title}
      postTitle="Contact"
      verb="emailed"
    >
      <SEO title="Contact" />
      <Container>
        <Header>Contact</Header>
        <p>
          Sometimes it's not about following{' '}
          <a href={`https://www.instagram.com/${social.instagram}`}>the gram</a>
          , or filing an issue{' '}
          <a href="https://github.com/jmagrippis/today-i">on Github</a>.
        </p>
        <p>Sometimes it's about sending a message.</p>
        <p>And you can do just that, with the following form!</p>
        <Form />
      </Container>
    </Layout>
  )
}

export default ContactPage
