import {ImageDataLike} from "gatsby-plugin-image";

export default interface MdxResult {
  frontmatter: {
    slug: string;
    date: string;
    title: string;
    synopsis: string;
    thumbnail?: {
      childImageSharp: {
        gatsbyImageData: ImageDataLike | null;
      }
    }
  }
  parent: {
    id: string;
    modifiedTime: string;
    name: string;
  }
}
