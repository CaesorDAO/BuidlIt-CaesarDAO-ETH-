import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  /* display: grid; */
  align-items: center;
  justify-content: center;
  background: black;
  margin-top: 50px;
  /* max-width: 80vw; */
  /* margin: 50px -20px 0px -20px; */

  /* @media screen and (max-width: 768px) {
    width: 90vw;
  } */
  /* @media screen and (max-width: 480px) {
    width: 300px;
  } */
`;

export const ServicesWrapper = styled.div`
  max-width: 1300px;
  background-color: black;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: left;
  grid-gap: 16px;
  padding: 0px;

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: black;
  display: flex;
  align-items: center;
  max-height: auto;
  width: 450px;
  padding: 0 0 0 0 px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 0 1px 3px #000;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;

export const ServicesIcon = styled.img`
  height: 300px;
  width: max-width;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 64px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1 rem;
  margin-bottom: 10px;
  color: white;
`;

export const ServicesP = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color: white;
  width: 350px;
`;
