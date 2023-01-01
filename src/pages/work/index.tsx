import React from 'react';
import {HeadFC, PageProps} from "gatsby";
import { graphql } from "gatsby";
import styled from "styled-components";

import "../../utils/graphql/AllMdxFrontmatter";
import {AllMarkdownRemark, AllMdx, WorkFrontmatter} from "../../types/MdxFrontmatter";
import ProjectSummary from "../../components/ProjectSummary";
import {useThumbnailAllMdx} from "../../utils/hooks";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const WorkPage: React.FC<PageProps<AllMdx<WorkFrontmatter>>> = ({ data, children }) => {
  let nodes = useThumbnailAllMdx<WorkFrontmatter>(data.allMdx.nodes);

  return (
    <ListContainer>
      {nodes.map(({ thumbnail, mdx }) => (
        <ProjectSummary node={mdx} thumbnail={thumbnail} />
      ))}
    </ListContainer>
  )
}

export default WorkPage

export const Head: HeadFC = () => <title>Jimmy Li | Work</title>

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {type: {eq: "work"}}}) {
      nodes {
        ...AllMdxFrontmatterWork
      }
    }
  }
`

