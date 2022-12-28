import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

// @ts-ignore
import profile from "../images/profile.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  border-radius: 10px;
  border: 1px solid black;
  padding: 20px;
  gap: 20px;
  align-items: start;

  strong {
    color: #436475;
  }
`

const Left = styled.div`
  max-width: 170px;
  
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
`

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`

const ProfileSummary: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <img src={profile} />

      </Left>
      <Right>
        <h2>Jimmy Li</h2>
        <p>
          Hi! I'm Jimmy. I'm a <strong>fullstack software engineer</strong> based in <strong>Toronto, Canada</strong>.
          I'm also an aspiring writer/blogger, sports and travel enthusiast.
        </p>
        <p>
          Welcome to my website, where I showcase my accomplishments and occasionally blog about my life!
        </p>
        <Socials>
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
        </Socials>
      </Right>
    </Wrapper>
  )
}

export default ProfileSummary;
