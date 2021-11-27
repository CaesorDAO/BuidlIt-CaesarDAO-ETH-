import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Modal from "../Modal/Modal";
import "./style.css";
// import Ape1 from "../../../images/ape1.png";

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const axios = require("axios");

export const ImgWrappers = styled.div`
  display: center;
  margin: 0 0 0 0;
`;

export const ImgWrapper = styled.div`
  display: center;
  /* margin: 20px 0 0 0; */
  /* max-height: 400px;
  max-width: 400px;
  height: 30vw;
  width: 30vw; */

  width: 400px;
  height: 450px;

  @media screen and (min-width: 1080px) {
    align-self: flex-end;
  }

  @media screen and (max-width: 600px) {
    zoom: 70%;
  }
`;

export const Img = styled(LazyLoadImage)`
  padding-right: 0;
  border: 1px;
  width: 100% !important;
  /* height: 280px; */
  width: auto;
  margin: 0px 0 0 0px;
  justify-content: center;
  /* vertical-align: middle; */
  display: block;
  position: relative;
  border-radius: 5%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const ModalImg = styled.img`
  padding-right: 0;
  border: 1px;
  width: 100% !important;
  margin: 0px 0 0 0px;
  justify-content: center;
  /* vertical-align: middle; */
  display: block;
  position: relative;
  border-radius: 5%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const Container = styled.div`
  display: grid;
  /* align-items: center; */
  justify-content: flex-start;

  @media screen and (max-width: 600px) {
    display: flex;
    align-self: center !important;
  }
`;

const Heading = styled.div`
  font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #aaf200;
  margin: 10px 0 0 0;
  padding: 10px 0 0 0px;
`;

const Trait = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  padding: 2px 0 0 0;
`;

const Text = styled.div`
  color: white !important;
  font-size: 40px;
  padding: 20px 20px;
`;

const GridView = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  height: 330px;
  width: 250px;
  border: solid 2px white;
  border-radius: 5%;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const Rank = styled.div`
  font-family: Roboto;
  font-size: 35px;
  font-weight: bold;
  color: #10e54c;

  @media screen and (max-width: 500px) {
    font-size: 31px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 20px; */

  @media screen and (max-width: 1080px) {
    /* gap: 50px; */
    /* zoom: 50%; */
    /* align-items: flex-end; */
  }
`;

const Right = styled.div`
  height: 500px;
  width: 400px;
  align-items: right;
  /* float: right; */
  padding: 20px 0px;
  /* margin: 0 0 0 20px; */

  display: inline-block;
  width: 30%;
  @media screen and (max-width: 1080px) {
    padding: 20px 0px;
    width: 400px;
  }
`;

const Left = styled.div`
  height: 500px;
  width: 400px;
  align-items: right;
  float: left;
  /* display: inline-block; */
  display: flex;
  justify-content: center;
  width: 55%;
  /* padding-bottom: 40px; */
  /* align-self: baseline; */

  @media screen and (min-width: 1080px) {
    align-self: flex-end;
    padding-bottom: 15px;
  }

  @media screen and (max-width: 1080px) {
    margin-bottom: 20px;
    width: 400px;
    justify-self: center;
  }

  @media screen and (max-width: 600px) {
    height: 350px;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ImageGrid = ({ properties, setProperties }) => {
  const [apes, setApes] = useState(null);
  const [apeProp, setApeProp] = useState(null);
  const [open, setOpen] = useState(false);

  const Fetch = async () => {
    // const url = "http://localhost:4000/gallery";
    const url = "https://api.kraznikunderverse.com/gallery";

    if (properties) {
      const res = await axios.post(url, properties);
      // console.log(res.data);
      setApes(res.data.data);
    }
  };

  useEffect(() => {
    Fetch();
  }, [properties]);

  return (
    <Container>
      {/* <Text>ApeGallery Images</Text> */}
      {apes ? (
        <GridView>
          {apes.map((ape) => {
            return (
              <div key={ape.id}>
                <Card
                  onClick={() => {
                    setOpen(true);
                    setApeProp(ape);
                  }}
                >
                  <ImgWrappers start={""}>
                    <Img
                      // src={Ape1}
                      effect="blur"
                      src={ape.image}
                      alt={ape.name}
                      // height="400px"
                      // width="400px"
                      width="100%"
                    />
                    <div className="id"> APE#{ape.id}</div>
                  </ImgWrappers>
                </Card>
              </div>
            );
          })}
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="popup-container">
              {apeProp ? (
                <>
                  <div className="number">{apeProp.name}</div>
                  <Content>
                    <Left>
                      <ImgWrapper start={""}>
                        <ModalImg src={apeProp.image} alt={apeProp.name} />
                        <button className="objkt"> View on Objkt.com </button>
                      </ImgWrapper>
                    </Left>

                    <Right>
                      <Rank>
                        {" "}
                        Rarity Rank : {apeProp.rarityRank}
                        {/* Null */}
                      </Rank>

                      <Heading> Headwear </Heading>
                      <Trait>
                        {" "}
                        {apeProp.headwear ? apeProp.headwear : "None"}
                      </Trait>
                      <Heading> Skin </Heading>
                      <Trait> {apeProp.skin ? apeProp.skin : "None"}</Trait>
                      <Heading> Eye </Heading>
                      <Trait> {apeProp.eye ? apeProp.eye : "None"}</Trait>
                      <Heading> Eyewear </Heading>
                      <Trait>
                        {" "}
                        {apeProp.eyewear ? apeProp.eyewear : "None"}
                      </Trait>
                      <Heading> Mouth Cosmetics </Heading>
                      <Trait>
                        {" "}
                        {apeProp.mouthCosmetics
                          ? apeProp.mouthCosmetics
                          : "None"}
                      </Trait>
                      <Heading> Clothes </Heading>
                      <Trait>
                        {" "}
                        {apeProp.clothes ? apeProp.clothes : "None"}
                      </Trait>
                      <Heading> Neckwear </Heading>
                      <Trait>
                        {" "}
                        {apeProp.neckwear ? apeProp.neckwear : "None"}
                      </Trait>
                      <Heading> Background </Heading>
                      <Trait> {apeProp.bg ? apeProp.bg : "None"}</Trait>
                    </Right>
                  </Content>
                </>
              ) : null}
            </Box>
          </Modal>
        </GridView>
      ) : null}
    </Container>
  );
};

// black bg is because the modal is in the iterator, how to fix it?

export default ImageGrid;
