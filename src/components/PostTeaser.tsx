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
`

const ImageLink = styled(Link)`
  flex: 0 1 640px;
  margin-right: 1em;
`

const Main = styled.div`
  flex: 0 1 320px;
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
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
  flex: 1;
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
