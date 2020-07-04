import React, { ReactNode } from "react"
import Header from "./header"
import Navbar from "./navbar"

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className="container mx-auto mt-10 w-4/5">
      <Navbar />
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
