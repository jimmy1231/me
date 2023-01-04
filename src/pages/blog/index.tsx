import React, {useMemo} from "react";
import styled from "styled-components";
import * as _ from 'lodash';
import {graphql, HeadFC, PageProps} from "gatsby";
import BlogFrontmatter, {AllMdx, MdxThumbnail} from "../../types/MdxFrontmatter";
import "../../utils/graphql/AllMdxFrontmatter";

// @ts-ignore
import diary from "../../images/diary.png";
import {useThumbnailAllMdx} from "../../utils/hooks";
import BlogSummary from "../../components/BlogSummary";
import {MonthLUT} from "../../utils/utils";

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`

const Header = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  
  img {
    max-width: 150px;
  }
`

const Body = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 3em;
  
  h4 {
    margin-bottom: 5px;
  }
  
  h4 a {
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }
    
    :before {
      content: '# ';
    } 
  }
`

const BlogPage: React.FC<PageProps<AllMdx<BlogFrontmatter>>> = ({ data }) => {
  let nodes = useThumbnailAllMdx<BlogFrontmatter>(data.allMdx.nodes);

  let groupBy: {
    [index: string]: MdxThumbnail<BlogFrontmatter>[]
  } = useMemo(() => {
    return _.groupBy(nodes, node => {
      let dateStr = node.mdx.frontmatter.date;

      // get month-year string
      let date = new Date(Date.parse(dateStr));
      return `${date.getFullYear()} ${MonthLUT[date.getMonth()]}`;
    });
  }, [nodes]);

  return (
    <Blog>
      <Body>
        {Object.entries(groupBy).map(([monthYear, blogs]) => {
          let id = monthYear.replace(' ', '-').toLowerCase();
          return (
            <section id={id}>
              <h4><a href={`#${id}`}>{monthYear}</a></h4>
              {blogs.map(({ mdx, thumbnail }) => (
                <BlogSummary
                  frontmatter={mdx.frontmatter}
                  thumbnail={thumbnail} />
              ))}
            </section>
          )
        })}
      </Body>
    </Blog>
  )
}

export default BlogPage

export const Head: HeadFC = () => <title>Jimmy Li | Blog</title>

export const query = graphql`
  query {
    allMdx(
      filter: {frontmatter: {type: {eq: "blog"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        ...AllMdxFrontmatter
      }
    }
  }
`

