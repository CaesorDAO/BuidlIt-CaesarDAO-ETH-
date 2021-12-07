import React from "react";
import styled from "styled-components";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

// import { ReactComponent as Icon } from "../../assets/svgIcons/medal.svg";

import "react-vertical-timeline-component/style.min.css";




import timelineElements from "./data";
const Roadmap = () => {
  return (
    <QualsContainer>
      <Wrapper>
        <HeroH2> Future Plans</HeroH2>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                iconStyle={{ color: "black" }}
                // icon={<Icon />}
              >
                {" "}
                <CardWrapper>
                  <ImageWrapper>
                    <img src={element.img} alt="certification" />
                  </ImageWrapper>
                  <DetailsWrapper>
                    <h1 className="vertical-timeline-element-title">
                      {" "}
                      {element.title}{" "}
                    </h1>{" "}
                    <h5 className="vertical-timeline-element-subtitle">
                      {" "}
                      {element.location}{" "}
                    </h5>{" "}
                    <p id="description">{element.description}</p>{" "}
                  </DetailsWrapper>
                </CardWrapper>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Wrapper>
    </QualsContainer>
  );
};

const QualsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 0px;
  background-color: black;
`;
const Wrapper = styled.div`
  width: "400px";
  height: "300px";
  padding: 50px 10px;
  
`;
const Title = styled.h2`
  font-family: Poppins;
  font-size: 85px;
  font-style: normal;
  text-align: center;
  font-weight: 1100px;
  line-height: 50px;
  letter-spacing: 0.05em;
  text-align: left;
  color: white;
  text-align: center;
  margin-bottom: 75px;
  @media screen and (max-width: 400px) {
    font-size: 65px;
  
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color:black;
  box-shadow: 5px 20px 35px 1px black;
  padding: 0 0 0 10px;
  
  
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  text-align: center;
  img {
    width: 200px;
    height: 200px;
    margin: 10px 0 0 30px;
    @media screen and (max-width: 800px) {
      width: 150px;
      height: 150px;
      margin: 85px 0 0 10px;
    
    }
  }
`;



const DetailsWrapper = styled.div`
  padding: 20px 25px;
  width: 100%;
  height: 100%;
  color:white;

  @media screen and (max-width: 400px) {
    font-size:15px;
    text-align:left;
    padding: 15px 15px;
  
  }
`;
const HeroH2 = styled.h1`
font-size: clamp(2rem, 10vw, 5rem);
color:white;
letter-spacing: 3px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export default Roadmap;