import React, { ReactNode } from 'react'
import 'reset-css'

import { Header } from './Header'

type Props = {
  siteTitle: string
  postTitle: string
  children: ReactNode
}

const Layout = ({ siteTitle, postTitle, children }: Props) => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '24em',
        padding: '1.5em 0.75em',
      }}
    >
      <Header siteTitle={siteTitle} postTitle={postTitle} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
