import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: green;
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: green;
  margin-bottom: 10px;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ScrollText = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;
