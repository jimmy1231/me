import React, {useCallback, useRef} from 'react';
import {MarkdownNode, WorkFrontmatter} from "../types/MdxFrontmatter";
import WorkThumbnail from "./WorkThumbnail";
import styled from "styled-components";

import "./css/ProjectSummary.css";
import {navigate} from "gatsby";

const Wrapper = styled.div`
  font-size: 0.9em;
  display: flex;
  flex-direction: row;
  gap: 15px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; 
  padding: 10px;
  border-radius: 10px;
  
  :hover {
    cursor: pointer;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 10px;
`

const Title = styled.div`
  font-size: 1.1em;
  a {
    text-decoration: none;
  }
`

const SummaryMdContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  li, ul {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const KV: React.FC<{ name: string, children?: React.ReactNode }> = ({ name, children }) => {
  return (
    <div><strong>{name}:</strong> {children}</div>
  )
}

const ProjectSummary: React.FC<{
  node: MarkdownNode<WorkFrontmatter>;
  thumbnail: any;
}> = ({ node , thumbnail }) => {
  let {
    repository,
    tech,
    code,
    status,
    timeline,
    title,
    slug,
    synopsis
  } = node.frontmatter;

  let onClick = useCallback(() => {
    navigate(`/work/${slug}`);
  }, [])

  let onGithubClick = useCallback((e: Event) => {
    e.stopPropagation()
  }, [])

  return (
    <Wrapper onClick={onClick}>
      <Left>
        {/* Title */}
        <Title>
          {/* @ts-ignore */}
          <a href={repository} target={"__blank"} onClick={onGithubClick}>
            "<strong>{title}</strong>"
          </a> -&nbsp;
          <span>{synopsis}</span>
        </Title>

        {/* Thumbnail */}
        <WorkThumbnail thumbnail={thumbnail} />
      </Left>
      <SummaryMdContainer>
        {/* Description */}
        <div>
          <KV name={'Languages/Technology'}>{tech}</KV>
          <KV name={'Lines of Code'}>{code}</KV>
          <KV name={'Status'}>{status}</KV>
          <KV name={'Timeline'}>{timeline}</KV>
        </div>

        <div>
          {node.excerpt}
        </div>
      </SummaryMdContainer>
    </Wrapper>
  )
}

export default ProjectSummary
