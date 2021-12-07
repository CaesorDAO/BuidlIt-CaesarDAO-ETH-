import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 0px 0 15px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "black")};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

// export const InfoRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, 600px);
//   // gap: 50px;
//   align-items: center;
//   justify-items: center;
// `;

export const InfoColumn = styled.div`
  margin-bottom: px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  & input {
    width: 273px;
    height: 58px;
    flex-grow: 0;
    border-left-radius: 40%;
    font-family: RobotoSlab;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    text-align: center;
    background-color: #fff;
    // border-top-left-radius: 50px;
    // border-bottom-left-radius: 50px;
  }

  & button {
    // width: 224px;
    width: 273px;
    height: 58px;
    flex-grow: 0;
    // border-top-right-radius: 50px;
    // border-bottom-right-radius: 50px;
    background-color: #17191b;
    flex-grow: 0;
    font-family: RobotoSlab;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }

  & input {
    width: 273px;
    height: 58px;
    flex-grow: 0;
    border-left-radius: 40%;
    font-family: RobotoSlab;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: black;
    text-align: center;
    background-color: #fff;

    @media screen and (max-width: 768px) {
      width: 223px;
    }
  }

  & button {
    width: 223px;
    height: 58px;
    flex-grow: 0;

    background-color: #17191b;
    flex-grow: 0;
    font-family: RobotoSlab;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  margin: 0 0 0 100px;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const ImgWrappers = styled.div`
  width: 1000px;
  display: center;
  margin: 0 0 0 0;
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  // max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 450px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 55px;
  max-width: 640px;
  line-height: 1.1;
  font-weight: 500;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 50;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#1c2237")};
`;
