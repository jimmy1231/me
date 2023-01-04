import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

// @ts-ignore
import background from "../images/background.webp";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
  margin-bottom: 10px;
  padding: 0 15px;
  gap: 10px;
`

const Wrapper = styled.div`
  min-height: 100vh;
`

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Navbar />
      <Layout>
        {children}
      </Layout>
    </Wrapper>
  )
}
