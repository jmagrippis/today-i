import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.header`
  padding: 0.5em 0.25em;
`

const H1 = styled.h1`
  font-size: 1.5em;
`

const H3 = styled.h3`
  font-size: 1.25em;
`

type Props = {
  siteTitle: string
  postTitle: string
}

export const Header = ({ siteTitle, postTitle }: Props) => {
  const Headline = postTitle ? H1 : H3

  return (
    <Container>
      <Headline
        style={{
          fontSize: '1.5em',
          marginBottom: '1.5em',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          {siteTitle}
          {postTitle ? ` - ${postTitle}` : ''}
        </Link>
      </Headline>
    </Container>
  )
}
