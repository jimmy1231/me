import React, {useMemo} from 'react';
import styled from "styled-components";

// @ts-ignore
import profilePicture from "../images/profile.jpg";
import Socials from "./Socials";
import {MonthLUT} from "../utils/utils";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

const ProfilePicture = styled.div`
  background-image: url(${profilePicture});
  width: 2.5em;
  height: 2.5em;
  background-size: cover;
  border-radius: 50%;
`

const Description = styled.div`
`

const Name = styled.div`
  font-weight: 500;
`

const DateContainer = styled.div`
  font-size: 0.9em;
  color: #7b7b7b;
`

const PostHeading: React.FC<{
  date: string;
  readingTimeMins?: number;
}> = ({ date , readingTimeMins}) => {
  let dateString: string = useMemo(() => {
    let d = new Date(date);
    return `${MonthLUT[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  }, [date])

  return (
    <Wrapper>
      <Profile>
        <ProfilePicture />
        <Description>
          <Name>
            Jimmy Li
          </Name>
          <DateContainer>
            {dateString} • {readingTimeMins || '<1'} min read
          </DateContainer>
        </Description>
      </Profile>
      <Socials />
    </Wrapper>
  )
}

export default PostHeading