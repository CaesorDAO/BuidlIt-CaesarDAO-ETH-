import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  margin: 50px 0px 100px 0px;
  gap: 30px;
  font-family: Roboto Slab;
  width: 100vw;
`;

export const Header = styled.h1`
  text-align: center;
  color: white;
  letter-spacing: 5px;
  margin: 20px 0px;
`;

export const Img = styled.img`
  /* max-height: 400px; */
  max-width: 700px;
  width: 90vw !important;
  width: auto;
`;

export const Show = styled.div`
  background-color: white;
  /* background-color: #c4c4c4; */
  width: 430px;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  align-items: center;
  border-radius: 10px;

  @media screen and (max-width: 550px) {
    width: 360px;
    gap: 15px;

    div {
      font-size: 16px;
    }
  }
`;

export const Quantity = styled.div`
  color: black;
  font-size: 21px;
  justify-self: flex-start;
  margin-left: 20px;
`;

export const Price = styled.div`
  background-color: #c4c4c4;
  /* background-color: #322f2f;
  color: white; */
  justify-self: flex-end;
  font-size: 17px;
  margin-right: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  width: 120px;
  text-align: center;
`;

export const Choose = styled.div`
  display: flex;
  gap: 40px;
  /* margin: 20px 0px; */
`;

export const Box = styled.div`
  height: 40px;
  width: 40px;
  background-color: #c4c4c4;
  border-radius: 5px;
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 18px;
  font-weight: bold;
  transition: 0.2s ease-in;

  &:hover {
    cursor: pointer;
    background: #62baf3;
    /* background: #322f2f;
    color: white; */
  }
`;

export const Button = styled.button`
  background-color: #322f2f;
  color: white;
  padding: 10px 40px;
  font-size: 20px;
  border-radius: 3px;
  font-family: RobotoSlab;

  &:hover {
    cursor: pointer;
  }
`;

export const Supply = styled.div`
  background-color: #251a1a;
  /* background-color: #322f2f; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
`;

export const MintedCount = styled.div`
  background-color: white;
  /* background-color: #c4c4c4; */
  color: black;
  padding: 6px 20px;
  border-radius: 5px;
  text-align: center;
  width: 80px;
`;

export const Total = styled.div`
  color: white;
  padding: 6px 20px;
  width: 80px;
  text-align: center;
`;
