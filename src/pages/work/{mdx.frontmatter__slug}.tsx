import React, {useMemo} from "react";
import {graphql, PageProps} from "gatsby";
import {MarkdownNode, WorkFrontmatter} from "../../types/MdxFrontmatter";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import {Helmet} from "react-helmet";
import Tags from "../../components/Tags";
import WorkThumbnail from "../../components/WorkThumbnail";
import {useThumbnailAllMdx} from "../../utils/hooks";
import {FaGithub} from "react-icons/fa";

const Wrapper = styled.div`
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const MdContent = styled.div`
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding: 10px 0;
  border-bottom: 1px solid #c5c5c5;
`

const Col = styled.div`
  flex: 1;
`

const Header = styled.div`
  font-weight: 500;
  padding-bottom: 3px;
  color: #9d9d9d;
`

const Content = styled.div`
  font-weight: 600;
`

const MdxBlogPost: React.FC<PageProps<{mdx: MarkdownNode<WorkFrontmatter>}>> = ({ data, children }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 799px)' })

  let [node] = useThumbnailAllMdx<WorkFrontmatter>([data.mdx]);

  let {
    repository,
    tech,
    code,
    status,
    synopsis,
    timeline
  } = data.mdx.frontmatter

  return (
    <Wrapper>
      <Helmet>
        <title>Jimmy Li | {data.mdx.frontmatter.title}</title>
      </Helmet>

      <Body>
        <Left>
          <h2>{data.mdx.frontmatter.title}</h2>

          <MdContent>
            {children}
          </MdContent>
        </Left>

        {isBigScreen && (
          <Right>
            <WorkThumbnail thumbnail={node.thumbnail} />

            <Row>
              <Col>
                <Header><FaGithub /> Repository</Header>
                <Content><a href={repository} target="_blank">{repository}</a></Content>
              </Col>
            </Row>
            <Row>
              <Col>
                <Header>Tech</Header>
                <Content><Tags tags={tech}/></Content>
              </Col>
              <Col>
                <Header>Project size</Header>
                <Content>{code} lines</Content>
              </Col>
            </Row>
            <Row>
              <Col>
                <Header>Status</Header>
                <Content>{status}</Content>
              </Col>
              <Col>
                <Header>Timeline</Header>
                <Content>{timeline}</Content>
              </Col>
            </Row>
          </Right>
        )}
      </Body>
    </Wrapper>
  )
}

export default MdxBlogPost

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      ...AllMdxFrontmatterWork
    }
  }
`
