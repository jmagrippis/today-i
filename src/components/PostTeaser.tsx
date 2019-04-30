import React from 'react'
import { Link, navigate } from 'gatsby'
import Image, { FluidObject } from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  margin-bottom: 3em;
`

const ImageLink = styled(Link)`
  flex: 0 1 640px;
  margin-right: 1em;
`

const Main = styled.div`
  flex: 0 1 320px;
  padding: 0 0.5em;
`

const H3 = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.25em;
`

const Small = styled.small`
  display: block;
  margin-bottom: 1.5em;
`

const Body = styled.p`
  font-size: 1.25em;
`

type Props = {
  excerpt: string
  frontmatter: {
    title: string
    date: string
    description: string
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
      <H3>
        <Link to={fields.slug}>{frontmatter.title}</Link>
      </H3>
      <Small>
        {frontmatter.date} - {fields.readingTime.text}
      </Small>
      <Body
        dangerouslySetInnerHTML={{
          __html: frontmatter.description || excerpt,
        }}
      />
    </Main>
  </Container>
)
