import React, {useEffect} from "react";
import { graphql } from "gatsby";
import MdxProps from "../../types/MdxProps";
import MdxResult from "../../types/MdxFrontmatter";
import { useMediaQuery } from "react-responsive";

import "./css/Blog.css";

const BlogPost = ({ data, children }: MdxProps<{
  mdx: MdxResult
}>) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 800px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 799px)' })

  useEffect(() => {
    if (isBigScreen) {
      console.log('BIG SCREEN!!');
    } else if (isTabletOrMobile) {
      console.log('TABLET / MOBILE!!');
    }
  }, [isBigScreen, isTabletOrMobile]);

  return (
    <div>
      {data.mdx.frontmatter.slug}
      {data.mdx.frontmatter.date}
      <div>
        {children}
      </div>
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date
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
`
