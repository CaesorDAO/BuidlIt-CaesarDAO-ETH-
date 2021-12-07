import React from "react";
import Ape8 from "../../images/laptop.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "../Hero/InfoSection.elements";

import Countdown from "react-countdown";
import Icon from "../../images/live.png";
import styled from "styled-components";

const Counter = styled.div`
  font-size: 45px;
  color: yellow;
  font-family: "Raleway", sans-serif;
`;

const Button = styled.div`
  /* padding: 10px 20px; */
  height: 55px;
  width: 180px;
  background-color: #84b3c1;
  color: white;
  font-size: 27px;
  margin: 30px 0px;
  text-align: center;
  display: grid;
  align-content: center;
  border-radius: 3px;
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.04);
    cursor: pointer;
  }
`;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Counter>Minting is Live!!</Counter>;
  } else {
    // Render a countdown
    return (
      <Counter>
        {days} days:{hours} hours:{minutes}:{seconds}
      </Counter>
    );
  }
};

function Medium({
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
  start,
}) {
  return (
    <>
      <InfoSec lightBg={false}>
        <Container>
          <InfoRow imgStart={false}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={false}>{""}</TopLine>
                <Heading lightText={true}>
                  CaesorDAO <br></br> 
                </Heading>
                <Subtitle lightTextDesc={true}>
                  {
                    "Home to NFT Apes which serve as membership to the Kraznik DAO. The DAO is the governing body and will operate a community fund, host bi-annual meetups, and ultimately be the vehicle for generating alpha as a collective group of Degens."
                  }
                </Subtitle>
                {/* <Countdown date={"2021-12-07T00:00:00"} renderer={renderer} /> */}

                <Counter>
                  <Countdown date={Date.now() + 5000}>
                    <>
                      <div>
                        Minting is Live!!{" "}
                        <img src={Icon} width="50px" height="50px" />
                      </div>
                      <Button>
                        <Link
                          style={{ textDecoration: "none", color: "white" }}
                          to="/mint"
                        >
                          Mint here
                        </Link>
                      </Button>
                    </>
                  </Countdown>
                </Counter>
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

export default Medium;
