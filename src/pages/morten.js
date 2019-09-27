import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Spinner from "../components/spinner"
import FullCenter from "../components/full-center"

const MortenPage = () => (
  <Layout>
    <SEO title="Flein Shop" />
    <FullCenter>
      <Spinner />
    </FullCenter>
  </Layout>
)

export default MortenPage
