import {ImageDataLike} from "gatsby-plugin-image";

export enum MarkdownType {
  blog = 'blog',
  work = 'work'
}

export interface MarkdownNode<D> {
  id: string;
  frontmatter: BaseFrontmatter & D;
  excerpt?: string;
  html?: any;
  parent: {
    id: string;
    modifiedTime: string;
    name: string;
  }
}

export default interface BlogFrontmatter {
  date: string;
  tags: string;
}

export interface BaseFrontmatter {
  type: MarkdownType;
  title: string;
  slug: string;
  synopsis?: string;
  thumbnail?: {
    childImageSharp: {
      gatsbyImageData: ImageDataLike | null;
    }
  }
}

export interface WorkFrontmatter {
  repository: string;
  tech: string;
  code: string;
  status: string;
  timeline: string;
}

export interface AllMarkdownRemark<D> {
  allMarkdownRemark: {
    nodes: MarkdownNode<D>[]
  }
}

export interface MarkdownRemark<D> {
  markdownRemark: MarkdownNode<D>;
}

export interface Mdx<D> {
  mdx: MarkdownNode<D>;
}

export interface AllMdx<D> {
  allMdx: {
    nodes: MarkdownNode<D>[]
  }
}

export interface MdxThumbnail<D> {
  mdx: MarkdownNode<D>;
  thumbnail: any;
}
