import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Feed from "../components/feed"

interface Props {}

const index = (props: Props) => {
  return (
    <div>
      <SEO title="Home" />
      <Layout>
        <Feed />
      </Layout>
    </div>
  )
}

export default index
