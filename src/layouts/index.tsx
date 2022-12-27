import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 10px;
`

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Navbar />
      <div>
        {children}
      </div>
    </Layout>
  )
}
