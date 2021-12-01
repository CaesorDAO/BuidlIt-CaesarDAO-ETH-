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
import Edit from "../../../images/edit.png";

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
    /* display: flex; */
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
  text-align: center;
  color: white;
  margin: 0px 0 0 0;
  padding: 10px 0 0 0px;

  &:hover {
    color: black;
  }
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
  justify-content: center;

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

const Edits = styled.h1`
  margin: 5px 0 0 20px;
  text-align: right;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const SellerNavbar = styled.div`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  width: auto;
  /* padding: 0 0 20px 150px; */
  margin-bottom: 30px;
  justify-content: center;
`;

const Unlisted = styled.div`
  color: white;
  display: inline-block;
  border: 0.1px solid white;
  border-radius: 20px;
  font-size: 20px;
  color: white;
  height: 50px;
  width: 250px;
  text-align: center;
  /* margin: 0 20px 0 0; */
  margin: 10px 20px;

  &:hover {
    cursor: pointer;
    border: 1px solid white;
    background-color: white;
  }
`;

const OnSale = styled.div`
  color: white;
  display: inline-block;
  text-align: center;

  display: inline-block;
  border: 0.1px solid white;
  border-radius: 20px;
  font-size: 20px;
  color: white;
  height: 50px;
  width: 250px;
  margin: 10px 20px;

  &:hover {
    cursor: pointer;
    border: 1px solid white;
    background-color: white;
  }
`;

const SellContainer = styled.div`
  // background-color:white;
  padding: 20px;
  
`;

const SellingPrice = styled.div`
  float: left;
  border-radius: 5px; 
  // background-color:red;
  height: 40px; 
  text-align:center;
  vertical-align: middle;
  padding-top:10px;

 

`;


const SellPrice = styled.h1`

font-family: Roboto;
font-size: 22px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: white;
align-items:center;
vertical-align: middle;
`;


const CancelSell = styled.button`
display: inline-block;
align-items:right;
float: right;
display: inline-block;
border-radius:5px;
height: 40px; 
wisth: 80px;
padding: 10px;
font-weight: bold;
font-size: 17.5px;
background-color: black;
border: 0.1px solid white;
color:white;

&:hover {
  cursor: pointer;
  border: 1px solid white;
  background-color: white;
  color:black;
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

var currentSellingPrice = "50"

const ImageGrid = ({ properties, setProperties, ownedTokensList }) => {
  const [apes, setApes] = useState([]);
  const [apeProp, setApeProp] = useState(null);
  const [open, setOpen] = useState(false);

  const Fetch = async () => {
    // const url = "http://localhost:4000/gallery";
    const url = "https://api.kraznikunderverse.com/gallery";

    if (properties) {
      const res = await axios.post(url, properties);
      console.log(res.data.data);
      setApes(res.data.data);
    }
  };

  useEffect(() => {
    Fetch();
  }, [properties]);

  return (
    <Container>
      <SellerNavbar>
        <Unlisted>
          <Heading>Unlisted </Heading>
        </Unlisted>
        <OnSale>
          {" "}
          <Heading>On Sale </Heading>{" "}
        </OnSale>
      </SellerNavbar>
      {/* <Text>ApeGallery Images</Text> */}
      {apes.length !== 0 ? (
        <GridView>
          {ownedTokensList.map((tokenId, index) => {
            let tokId = parseInt(tokenId);
            console.log("tokId: ", tokId);
            let ape = apes[tokId];
            console.log("apes in tokId: ", apes[tokId]);
            // console.log("ape", typeof parseInt(tokenId));
            // console.log(apes[0]);
            return (
              <div key={index}>
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
                      src={ape ? ape.image : ""}
                      alt={ape ? ape.name : ""}
                      // height="400px"
                      // width="400px"
                      width="100%"
                    />
                    <div className="id"> {ape ? `APE#${ape.id}` : ""}</div>
                    {/* <div className="id"> Edit Id 
                    <img src={Edit} height="20px" className="edit"></img>
                    </div> */}

                    {/* <button className="sell"> Sell </button> */}
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
            <Box sx={style} className="popup-containers">
              {apeProp ? (
                <>
                  <div className="number">
                    {apeProp.name}
                    <Edits>
                      {" "}
                      Edit Id
                      <img src={Edit} height="16px" className="edit"></img>
                    </Edits>
                  </div>

                  <Content>
                    <Left>
                      <ImgWrapper start={""}>
                        <ModalImg src={apeProp.image} alt={apeProp.name} />

                        

                        {/* <div className="sell-point-container">
                          <div className="price-container">
                            <h1 className="matic"> MATIC </h1>
                            <forum className="forms">
                              <input
                                type="number"
                                placeholder="Price"
                                className="sell-price-input"
                              ></input>
                            </forum>
                          </div>
                          <button className="sell"> Sell </button>
                        </div> */}


                      <SellContainer>
                        <SellingPrice>
                         <SellPrice>Selling Price : {currentSellingPrice} Matic  </SellPrice>
                        </SellingPrice>
                        <CancelSell>Cancel Sell </CancelSell>
                      </SellContainer>


                      </ImgWrapper>
                    </Left>
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
