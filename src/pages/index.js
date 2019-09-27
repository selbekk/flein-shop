import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"

const FullCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Flein Shop" />
    <FullCenter>
      <PageTitle>Flein. Shop</PageTitle>
    </FullCenter>
  </Layout>
)

export default IndexPage
