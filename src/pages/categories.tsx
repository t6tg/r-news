import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

const c = (props: Props) => {
  return (
    <Layout tag="Categories">
      <SEO title="Categories" />
      <div></div>
    </Layout>
  )
}

export default c
