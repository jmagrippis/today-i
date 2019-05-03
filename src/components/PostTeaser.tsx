import React from 'react'
import { Link } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'

import { Small } from './Small'
import { appear } from '../animations'

const Container = styled.div`
  display: flex;
  margin-bottom: 3em;
  animation: ${appear} 1s cubic-bezier(0.165, 0.84, 0.44, 1);

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ImageLink = styled(Link)`
  margin: 0 0 1em 0;

  @media (min-width: 701px) {
    flex: 0 1 640px;
    margin: 0 1em 0 0;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }
`

const Main = styled.div`
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;

  @media (min-width: 701px) {
    flex: 0 1 320px;
  }
`

const H2 = styled.h2`
  font-size: 1.75em;
  margin-bottom: 0.25em;
`

const Body = styled.p`
  font-size: 1.5em;
  line-height: 1.3em;
`

const Spacer = styled.span`
  @media (min-width: 701px) {
    flex: 1 0;
  }
`

const Verb = styled.div`
  align-self: flex-end;
  color: #f7f9f4;
  background-color: #e4572e;
  padding: 0.5em;
  border-radius: 4px;
  font-family: 'Eczar', serif;
`

type Props = {
  excerpt: string
  frontmatter: {
    title: string
    date: string
    description: string
    verb: string
    readingTime: {
      text: string
    }
    cover: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
  fields: {
    slug: string
    readingTime: {
      text: string
    }
  }
}

export const PostTeaser = ({ fields, excerpt, frontmatter }: Props) => (
  <Container>
    <ImageLink to={fields.slug}>
      <Image
        fluid={frontmatter.cover.childImageSharp.fluid}
        alt={fields.slug}
      />
    </ImageLink>
    <Main>
      <H2>
        <Link to={fields.slug}>{frontmatter.title}</Link>
      </H2>
      <Small date={frontmatter.date} readingTime={fields.readingTime.text} />
      <Body
        dangerouslySetInnerHTML={{
          __html: frontmatter.description || excerpt,
        }}
      />
      <Spacer />
      <Verb>{frontmatter.verb}</Verb>
    </Main>
  </Container>
)
