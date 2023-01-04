import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components";
import {graphql} from "gatsby";
import ProfileSummary from "../components/ProfileSummary";
import BlogFrontmatter, {AllMarkdownRemark, AllMdx} from "../types/MdxFrontmatter";
import BlogSummary from "../components/BlogSummary";
import {useThumbnailAllMdx} from "../utils/hooks";

import "../utils/graphql/AllMdxFrontmatter";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

const BlogSummaryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const IndexPage: React.FC<PageProps<AllMdx<BlogFrontmatter>>> = ({ data }) => {
  let nodes = useThumbnailAllMdx<BlogFrontmatter>(data.allMdx.nodes);

  return (
    <Main>
      <ProfileSummary />

      {/* latest blogs */}
      <div>
        <h3>
          Latest blogs
        </h3>
        <BlogSummaryList>
          {nodes.map(({mdx:node, thumbnail}) => (
            <BlogSummary {...node} thumbnail={thumbnail} />
          ))}
        </BlogSummaryList>
      </div>
    </Main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Jimmy Li | Home</title>

export const query = graphql`
  query {
    allMdx(
      filter: {frontmatter: {type: {eq: "blog"}}}
      sort: {frontmatter: {date: DESC}}
      limit: 5
    ) {
      nodes {
        ...AllMdxFrontmatter
      }
    }
  }`
