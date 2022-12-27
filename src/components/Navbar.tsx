import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import "./css/Navbar.css";

const MenuBtn = styled.div`
  border-radius: 5px;
  
  a {
    text-decoration: none;
    display: block;
    padding: 5px;
  }
  
  :hover {
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`

export default () => {
  return (
    <div className={'navbar'}>
      <MenuBtn>
        <Link to={"/"}>Home</Link>
      </MenuBtn>
      <div className={'navbar-links'}>
        <MenuBtn>
          <Link to={"/about"}>About me</Link>
        </MenuBtn>
        <MenuBtn>
          <Link to={"/work"}>Work</Link>
        </MenuBtn>
        <MenuBtn>
          <Link to={"/blog"}>Blog</Link>
        </MenuBtn>
      </div>
    </div>
  )
}
