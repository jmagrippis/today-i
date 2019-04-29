import React, { ReactNode } from 'react'
import 'reset-css'
import styled from 'styled-components'

import { Header } from './Header'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5em 0;
`

type Props = {
  siteTitle: string
  postTitle: string
  children: ReactNode
}

const Layout = ({ siteTitle, postTitle, children }: Props) => (
  <Container>
    <Header siteTitle={siteTitle} postTitle={postTitle} />
    <main>{children}</main>
    <footer>© {new Date().getFullYear()}, Built with 💜 in London</footer>
  </Container>
)

export default Layout
