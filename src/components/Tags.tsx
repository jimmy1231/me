import React, {useMemo} from "react";
import * as _ from 'lodash';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`

const Tag = styled.div`
  font-size: 0.8em;
  padding: 2px 5px;
  background-color: purple;
  font-weight: 500;
  color: white;
  border-radius: 3px;
  
  :hover {
    cursor: pointer;
  }
`

const Tags: React.FC<{
  tags: string;
  onClick?: (tag: string) => void;
}> = ({ tags , onClick }) => {
  let tagsList: string[] = useMemo(() => {
    return _.compact(_.split(tags, ','))
  }, [tags])

  return (
    <Wrapper>
      {tagsList.map(tag => (
        <Tag onClick={() => onClick && onClick(tag)}>{tag}</Tag>
      ))}
    </Wrapper>
  )
}

export default Tags