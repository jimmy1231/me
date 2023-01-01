import React from "react";
import styled from "styled-components";
import {StaticImage} from "gatsby-plugin-image";

const Wrapper = styled.div`
`

const ImgList: React.FC<{
  images: string[]
}> = ({ images }) => {
  console.log(images);
  return (
    <Wrapper>
      {images.map(imageUri => (
        <img src={imageUri}/>
      ))}
    </Wrapper>
  )
}

export default ImgList