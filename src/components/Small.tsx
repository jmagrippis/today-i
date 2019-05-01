import React from 'react'
import styled from 'styled-components'

const Container = styled.small`
  display: block;
  margin-bottom: 1.5em;
  color: #636668;
`

type Props = {
  date: string
  readingTime: string
}

export const Small = ({ date, readingTime }: Props) => (
  <Container>
    {date} - {readingTime}
  </Container>
)
