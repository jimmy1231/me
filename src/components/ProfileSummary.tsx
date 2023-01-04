import React from "react";
import styled from "styled-components";

// @ts-ignore
import profile from "../images/profile.jpg";
import Socials from "./Socials";

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

const ProfileSummary: React.FC = () => {
  return (
    <Wrapper>
      <Left>
        <img src={profile} />
      </Left>
      <Right>
        <h2>Jimmy Li</h2>
        <p>
          Hi! I'm Jimmy. I'm a <strong>software engineer</strong> based in <strong>Toronto, Canada</strong>.
          Welcome to my website/portfolio, where I showcase my work and occasionally blog about my life!
        </p>
        <p>
          I graduated from the University of Toronto in 2022 with a Bachelor's of Applied Science, majoring in Computer Engineering,
          and have since been working as a Systems Software Developer for FutureVault Inc.
        </p>
        <p>
          In my free time, I love to travel and golf with my family, play other sports, and write.
        </p>
        <Socials />
      </Right>
    </Wrapper>
  )
}

export default ProfileSummary;
