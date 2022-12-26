export default interface MdxResult {
  frontmatter: {
    slug: string;
    date: string;
    title: string;
  }
  parent: {
    id: string;
    modifiedTime: string;
    name: string;
  }
}
