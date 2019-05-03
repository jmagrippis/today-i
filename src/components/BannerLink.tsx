import React, { ReactNode } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled(Link)`
  display: block;
  color: #f7f9f4;
  background-color: #e4572e;
  text-align: center;
  padding: 1em 0;
  margin-bottom: 2em;
  border: 1px solid #e4572e;
  font-family: 'Eczar', serif;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  :hover {
    color: #e4572e;
    background-color: #f7f9f4;
  }
`

type Props = {
  children: ReactNode
  path: string
}
export const BannerLink = ({ children, path }) => (
  <Container to={path}>{children}</Container>
)

export default BannerLink
