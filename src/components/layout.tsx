import React, { ReactNode } from "react"
import Header from "./header"

interface Props {
  children: ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className="container mx-auto mt-10 w-4/5">
      <Header />
      {props.children}
    </div>
  )
}

export default Layout
