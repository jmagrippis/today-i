import React, { ReactNode } from 'react'
import 'reset-css'
import styled from 'styled-components'

import './index.css'
import { Header } from './Header'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5em 0;
`

const Footer = styled.footer`
  text-align: center;
`

type Props = {
  siteTitle: string
  postTitle: string
  children: ReactNode
  verb?: string
}

const Layout = ({ siteTitle, postTitle, verb, children }: Props) => (
  <Container>
    <Header siteTitle={siteTitle} postTitle={postTitle} verb={verb} />
    <main>{children}</main>
    <Footer>© {new Date().getFullYear()}, Built with 💜 in London</Footer>
  </Container>
)

export default Layout
