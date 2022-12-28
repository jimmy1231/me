import { graphql } from "gatsby";

export const AllMdxFrontmatter = graphql`
  fragment AllMdxFrontmatter on Mdx {
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
`
