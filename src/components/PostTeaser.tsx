import React from 'react'
import { Link, navigate } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  display: css;
`

const ImageLink = styled(Link)`
  flex: 0 1 640px;
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
        fluid: object
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
    <div>
      <h3
        style={{
          marginBottom: '0.25em',
        }}
      >
        <Link to={fields.slug}>{frontmatter.title}</Link>
      </h3>
      <small>
        {frontmatter.date} - {fields.readingTime.text}
      </small>
      <p
        dangerouslySetInnerHTML={{
          __html: frontmatter.description || excerpt,
        }}
      />
    </div>
  </Container>
)
