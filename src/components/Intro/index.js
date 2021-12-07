import React from 'react';
import Ape8 from "../../images/who.png";
import { Container,  } from 'react-bootstrap';
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

function Intro({
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
                <Heading lightText={true}>{"Who we Are"}</Heading>
                <Subtitle lightTextDesc={true}>{"We are a community-owned NFT project seeking to empower participants, collectors, and creatives to harness their inner Degen. We have a distinct emphasis on building utility through NFTs while simultaneously fostering a collaborative community of Apes who share two main goals — have fun and generate alpha."}</Subtitle>
                  {/* <Button big fontBig primary={false}>
                   
                  </Button> */}
              </TextWrapper>
              
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={""}>
                <Img src={Ape8} alt={"Credit"} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Intro;