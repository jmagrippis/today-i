import React, { useState, ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.span`
  color: #e4572e;
`

type Props = {
  verb?: string
}

export const Verb = ({ verb = '[verb]' }: Props) => (
  <Container>{verb}</Container>
)
