import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {graphql, Link} from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProfileSummary from "../components/ProfileSummary";
import MdxResult from "../types/MdxFrontmatter";
import {useMemo} from "react";
import PostThumbnail from "../components/PostThumbnail";
import BlogSummary from "../components/BlogSummary";

const IndexPage: React.FC<PageProps<{
  allMdx: {
    nodes: MdxResult[]
  }
}>> = ({ data }) => {
  let nodes: {
    mdx: MdxResult;
    thumbnail: any;
  }[] = useMemo(() => {
    return data.allMdx.nodes.map(node => {
      let thumbnail = node.frontmatter.thumbnail;
      return {
        mdx: node,
        thumbnail: thumbnail ? getImage(thumbnail.childImageSharp.gatsbyImageData) : null
      }
    });
  }, [data.allMdx.nodes]);

  return (
    <main>
      <ProfileSummary />

      {/* latest blogs */}
      <h3>
        Latest blogs
      </h3>
      <div>
        {nodes.map(({mdx:node, thumbnail}) => (
          <BlogSummary {...node} thumbnail={thumbnail} />
        ))}
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Jimmy Li | Home</title>

export const query = graphql`
  query {
    allMdx(
      filter: {frontmatter: {type: {eq: "blog"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "YYYY MMM DD")
          synopsis
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 150)
            }
          }
        }
        parent {
          ... on File {
            id
            name
          }
        }
      }
    }
  }`
