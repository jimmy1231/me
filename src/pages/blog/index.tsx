import React from "react";
import { graphql, Link } from "gatsby";
import MdxResult from "../../types/MdxFrontmatter";

export default ({ data }: { data: {
    allMdx: {
      nodes: MdxResult[]
    }
  } }) => {
  return (
    <div>
      This is my blog!!
      todo: insert all blogs sorted in descending order by date
      {data?.allMdx?.nodes?.map(post => (
        <div key={post.frontmatter.slug}>
          Blog:
          <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
    query {
        allMdx {
            nodes {
                frontmatter {
                    slug
                    title
                }
                parent {
                    ... on File {
                        id
                        name
                        modifiedTime
                    }
                }
            }
        }
    }
`
