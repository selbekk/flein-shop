import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Spinner from "../components/spinner"
import SEO from "../components/seo"

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
      <Spinner aria-label="Hold an 2 sek" />
      Flein.shop
    </FullCenter>
  </Layout>
)

export default IndexPage
