import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Feed from "../components/feed"

interface Props {}

const index = (props: Props) => {
  return (
    <Layout tag="Home">
      <SEO title="Home" />
      <Feed />
    </Layout>
  )
}

export default index
