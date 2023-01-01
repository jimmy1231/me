import { graphql } from "gatsby";

export const AllMarkdownFrontmatter = graphql`
  fragment AllMarkdownFrontmatter on Mdx {
    id
    excerpt
    frontmatter {
      slug
      title
      tags
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

export const AllMdxFrontmatter = graphql`
  fragment AllMdxFrontmatter on Mdx {
    id
    excerpt
    frontmatter {
      slug
      title
      tags
      type
      date(formatString: "YYYY MMM DD")
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
      synopsis
    }
    parent {
      ... on File {
        id
        name
      }
    }
  }
`

export const AllMdxFrontmatterWork = graphql`
  fragment AllMdxFrontmatterWork on Mdx {
    id
    excerpt
    frontmatter {
      slug
      code
      tags
      repository
      status
      type
      synopsis
      tech
      thumbnail {
        childImageSharp {
          gatsbyImageData(width: 700)
        }
      }
      timeline
      title
      type
    }
  }
`
