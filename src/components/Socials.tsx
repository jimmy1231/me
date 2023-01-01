import React from 'react';
import styled from "styled-components";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Socials: React.FC = () => {
  return (
    <Wrapper>
      <a href={'https://www.linkedin.com/in/jimmy-li-907969112/'} target="_blank">
        <FaLinkedin title={'LinkedIn'} />
      </a>
      <a href={'https://github.com/jimmy1231'} target="_blank">
        <FaGithub title={'GitHub'} />
      </a>
      <a href={'https://www.facebook.com/jimmy.li.31586/'} target="_blank">
        <FaFacebook title={'Facebook'} />
      </a>
      <a href={'https://www.instagram.com/jimmely1123/'} target="_blank">
        <FaInstagram title={'Instagram'} />
      </a>
    </Wrapper>
  )
}

export default Socials