import React from "react"
import SEO from "../components/seo"

interface Props {}

const index = (props: Props) => {
  return (
    <div>
      <SEO title="Home" />
      <p className="text-4xl font-bold">Hello World</p>
    </div>
  )
}

export default index
