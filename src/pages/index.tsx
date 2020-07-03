import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

interface Props {}

const index = (props: Props) => {
  return (
    <div>
      <SEO title="Home" />
      <Layout>
        <p className="text-2xl font-thin">Hello World</p>
      </Layout>
    </div>
  )
}

export default index
