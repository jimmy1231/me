import React, {useMemo, useRef} from "react";
import {graphql, Link, PageProps} from "gatsby";
import {MarkdownNode, Mdx} from "../../types/MdxFrontmatter";
import { useMediaQuery } from "react-responsive";

import "./css/Blog.css";
import BlogFrontmatter from "../../types/MdxFrontmatter";
import {GatsbyImage} from "gatsby-plugin-image";
import styled from "styled-components";
import {useReadingSpeed, useThumbnailAllMdx} from "../../utils/hooks";
import Tags from "../../components/Tags";
import PostHeading from "../../components/PostHeading";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  
  .gatsby-image-wrapper {
    border-radius: 5px;
    width: 200px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  
  h2 {
    margin: 0;
  }
`

const MdxBody = styled.div`
  img {
    border-radius: 6px;
  }
`

const MdxBlogPost: React.FC<PageProps<Mdx<BlogFrontmatter>>> = ({ data, children }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 799px)' })

  let [{mdx, thumbnail}] = useThumbnailAllMdx<BlogFrontmatter>([data.mdx]);
  let ref = useRef<HTMLDivElement>(null);
  let readingTimeMins = useReadingSpeed(ref);

  return (
    <Wrapper>
      <Header>
        {/* @ts-ignore */}
        <GatsbyImage alt={'Image'} image={thumbnail} />
        <Description>
          <PostHeading date={mdx.frontmatter.date} readingTimeMins={readingTimeMins} />
          <h2>{mdx.frontmatter.title}</h2>
          <Tags tags={mdx.frontmatter.tags} />
          <p>{mdx.frontmatter.synopsis}</p>
        </Description>
      </Header>
      <MdxBody ref={ref}>
        {children}
      </MdxBody>
    </Wrapper>
  )
}

export default MdxBlogPost

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      ...AllMdxFrontmatter
    }
  }
`
