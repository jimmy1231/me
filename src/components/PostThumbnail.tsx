import React from 'react';
import {GatsbyImage} from "gatsby-plugin-image";

import "./css/PostThumbnail.css";

const PostThumbnail: React.FC<{thumbnail: any}> = ({ thumbnail }) => {
  return (
    <GatsbyImage
      alt={'Post thumbnail'}
      className={'post-thumbnail'}
      image={thumbnail} />
  )
}

export default PostThumbnail
