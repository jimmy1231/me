import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import classNames from "classnames";

import "./css/Navbar.css";
import {useScrollPosition} from "../utils/hooks";

const Navbar = styled.div`
  display: flex;
  max-width: 800px;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`

const MenuBtn = styled.div`
  border-radius: 5px;
  
  a {
    font-size: 1em;
    font-weight: 600;
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
  let scrollPosition = useScrollPosition();

  return (
    <div className={classNames({
      'navbar': true,
      'navbar-scroll': scrollPosition > 0
    })}>
      <Navbar>
        <MenuBtn>
          <Link to={"/"}>Home</Link>
        </MenuBtn>
        <div className={'navbar-links'}>
          <MenuBtn>
            <Link to={"/work"}>Work</Link>
          </MenuBtn>
          <MenuBtn>
            <Link to={"/blog"}>Blog</Link>
          </MenuBtn>
        </div>
      </Navbar>
    </div>
  )
}
