import React from 'react';
import styled from "styled-components";
import {graphql, HeadFC, PageProps} from "gatsby";

// @ts-ignore
import picture_01 from "../../images/picture_01.jpg";

const About = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 20px;
  
  img {
    border-radius: 10px;
    max-width: 200px;
    object-fit: contain;
  }
`

const AboutPage: React.FC<PageProps<{
  markdownRemark: {
    html: string;
    frontmatter: {
      slug: string;
      title: string;
    }
  }
}>> = ({ data , children }) => {
  return (
    <About>
      <div>
        <img src={picture_01} alt={'Profile picture'} />
        CV
      </div>
      <div>
        <h3>About me</h3>
        <div>{children}</div>
        <ul>
          <li>Education</li>
          <li>Hobbies</li>
          <li>Resume</li>
        </ul>
      </div>
    </About>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>Jimmy Li | About</title>

export const query = graphql`
  query {
    mdx(frontmatter: {slug: {eq: "about"}}) {
      frontmatter {
        slug
        title
      }
    }
  }
`
