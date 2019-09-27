import React from "react"
import styled, { keyframes } from "styled-components"
import imageSrc from "../images/morten.png"

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  margin: auto;
  animation: 1s linear infinite ${spin};
  background: url(${imageSrc}) center center / contain no-repeat;
  height: 50vh;
  width: 50vw;
`

export default function Spinner(props) {
  return <Container {...props} />
}
