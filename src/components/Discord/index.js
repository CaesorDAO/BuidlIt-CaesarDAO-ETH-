import React from 'react';
import Ape7 from "../../images/degen 1.png";
import { Container, Button } from 'react-bootstrap';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from '../Hero/InfoSection.elements';

function Discord({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={false}>
        <Container>
          <InfoRow imgStart={true}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={false}>{''}</TopLine>
                <Heading lightText={true}>{"Join the Degen Life"}</Heading>
                <Subtitle lightTextDesc={true}>{"Join us to get the news as soon as possible and follow our latest announcements."}</Subtitle>
                  <Button href="https://discord.gg/nPYzvQFXYE"big fontBig primary={true}>
                    {'Discord'}
                  </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={""}>
                <Img src={Ape7} alt={"Credit"} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Discord;