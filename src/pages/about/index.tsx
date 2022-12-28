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
}>> = ({ data }) => {
  return (
    <About>
      <div>
        <img src={picture_01} alt={'Profile picture'} />
        CV
      </div>
      <div>
        <h3>About me</h3>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
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
    markdownRemark(frontmatter: {slug: {eq: "about"}}) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
