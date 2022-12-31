import React from 'react';
import PostThumbnail from "./PostThumbnail";
import {Link} from "gatsby";
import {BaseFrontmatter} from "../types/MdxFrontmatter";

import "./css/BlogSummary.css";

const BlogSummary: React.FC<{
  frontmatter: BaseFrontmatter & {
    date: string;
  },
  thumbnail: any
}> = ({ frontmatter , thumbnail }) => {
  return (
    <Link to={`/blog/${frontmatter.slug}`} className='blog-summary'>
      <PostThumbnail thumbnail={thumbnail} />
      <div className='blog-summary-info'>
        <div className='blog-summary-title'>
          <div className='blog-summary-title-text'>
            {frontmatter.title}
          </div>
          <div className='blog-summary-date'>
            {frontmatter.date}
          </div>
        </div>
        <div>
          {frontmatter.synopsis}
        </div>
      </div>
    </Link>
  )
}

export default BlogSummary
