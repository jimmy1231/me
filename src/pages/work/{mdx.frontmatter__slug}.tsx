import React from "react";
import {graphql, PageProps} from "gatsby";
import {MarkdownNode} from "../../types/MdxFrontmatter";
import { useMediaQuery } from "react-responsive";

import BlogFrontmatter from "../../types/MdxFrontmatter";

const MdxBlogPost: React.FC<PageProps<{mdx: MarkdownNode<BlogFrontmatter>}>> = ({ data, children }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 799px)' })

  return (
    <div>
      {data.mdx.frontmatter.slug}
      {data.mdx.frontmatter.date}
      {children}
    </div>
  )
}

export default MdxBlogPost

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      ...AllMdxFrontmatter
    }
  }
`
