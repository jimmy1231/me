import {MarkdownNode, MdxThumbnail} from "../types/MdxFrontmatter";
import {useMemo} from "react";
import {getImage} from "gatsby-plugin-image";

export function useThumbnailAllMdx<D> (nodes: MarkdownNode<D>[]): MdxThumbnail<D>[] {
  return useMemo(() => {
    return nodes.map(node => {
      let thumbnail = node.frontmatter.thumbnail;
      return {
        mdx: node,
        thumbnail: thumbnail ? getImage(thumbnail.childImageSharp.gatsbyImageData) : null
      }
    });
  }, [nodes]);
}
