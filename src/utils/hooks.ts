import {MarkdownNode, MdxThumbnail} from "../types/MdxFrontmatter";
import {RefObject, useCallback, useEffect, useMemo, useState} from "react";
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

export function useReadingSpeed (ref: RefObject<HTMLDivElement>): number {
  let [readingSpeed, setReadingSpeed] = useState(0)

  const getReadingSpeed = useCallback((text: string) => {
    let wpm = 200;
    let words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wpm);
  }, [])

  const onChange = useCallback(() => {
    let text = ref.current?.innerText || ''
    setReadingSpeed(getReadingSpeed(text))
  }, [ref])

  useEffect(() => {
    ref.current?.addEventListener('change', onChange)
    onChange()

    return () => {
      ref.current?.removeEventListener('change', onChange)
    }
  }, [ref])

  return readingSpeed
}

export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};