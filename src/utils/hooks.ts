import MdxResult, {AllMdx, MdxThumbnail} from "../types/MdxFrontmatter";
import {useMemo} from "react";
import {getImage} from "gatsby-plugin-image";

export function useThumbnailAllMdx (data: AllMdx): MdxThumbnail[] {
  return useMemo(() => {
    return data.allMdx.nodes.map(node => {
      let thumbnail = node.frontmatter.thumbnail;
      return {
        mdx: node,
        thumbnail: thumbnail ? getImage(thumbnail.childImageSharp.gatsbyImageData) : null
      }
    });
  }, [data]);
}
