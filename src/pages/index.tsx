import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components";
import {graphql} from "gatsby";
import ProfileSummary from "../components/ProfileSummary";
import {AllMdx} from "../types/MdxFrontmatter";
import BlogSummary from "../components/BlogSummary";
import "../utils/graphql/AllMdxFrontmatter";
import {useThumbnailAllMdx} from "../utils/hooks";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
`

const IndexPage: React.FC<PageProps<AllMdx>> = ({ data }) => {
  let nodes = useThumbnailAllMdx(data);

  return (
    <Main>
      <ProfileSummary />

      {/* latest blogs */}
      <div>
        <h3>
          Latest blogs
        </h3>
        <div>
          {nodes.map(({mdx:node, thumbnail}) => (
            <BlogSummary {...node} thumbnail={thumbnail} />
          ))}
        </div>
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
