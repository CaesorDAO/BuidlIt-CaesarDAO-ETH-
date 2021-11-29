import React, { useState } from "react";
import styled from "styled-components";

import Filters from "./Filters/index";
import ImageGrid from "./ImageGrid/index";

import ScrollButton from "./ScrollButton/ScrollButton";

const Container = styled.div`
  display: grid;
  grid-template-columns: 20vw 65vw;
  /* align-items: center; */
  /* justify-items: center; */
  /* width: 100vw !important; */
  padding-top: 10vh;

  gap: 5vw;

  @media screen and (max-width: 1600px) {
    grid-template-columns: 20vw 65vw;
    gap: 7vw;
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: 30vw 50vw;
    gap: 10vw;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 50vw 50vw;
    gap: 0px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
    /* grid-template-rows: 100px 1fr;
    gap: 20px; */
  }
`;

const SellGallery = () => {
  const [properties, setProperties] = useState({
    bg: "",
    clothes: "",
    eye: "",
    eyewear: "",
    headwear: "",
    mouthCosmetics: "",
    neckwear: "",
    skin: "",
  });

  return (
    <>
      <Container>
        <Filters properties={properties} setProperties={setProperties} />
        <ImageGrid properties={properties} setProperties={setProperties} />
      </Container>
      <ScrollButton />
    </>
  );
};

export default SellGallery;