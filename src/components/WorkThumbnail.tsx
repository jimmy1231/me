import React from 'react';
import {GatsbyImage} from "gatsby-plugin-image";

import "./css/WorkThumbnail.css";

const WorkThumbnail: React.FC<{thumbnail: any}> = ({ thumbnail }) => {
  return (
    <GatsbyImage
      alt={'Work thumbnail'}
      className={'work-thumbnail'}
      image={thumbnail} />
  )
}

export default WorkThumbnail
