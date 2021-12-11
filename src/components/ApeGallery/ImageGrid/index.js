import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import CaesarNFT from "../../../ethereum/CaesarNFT";
import CaesarMarketplace from "../../../ethereum/CaesarMarketplace";

const axios = require("axios");

const openInHex = "0x4f70656e000000000000000000000000";

export const ImgWrappers = styled.div`
  display: center;
  margin: 0 0 0 0;
`;

export const ImgWrapper = styled.div`
  display: center;
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
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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

const CurrentOwnerContainer = styled.div`
  border-radius: 5px;
  display: block;
  font-size: 25px;
  padding-top: 20px;

  text-align: center;
  float: center;

  background-color: black;
`;

const Owner = styled.div`
  display: block;
  font-size: 10px;
  text-align: center;
  float: center;
`;

const NotOnSale = styled.button`
  background-color: #161818;
  align-items: center;
  width: 400px;
  border: solid 1px #fff;
  text-align: center;
  color: white;
  font-size: 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
  border: solid 1px #fff;
  text-align: center;
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

const ImageGrid = ({ properties, setProperties, account, onlyShowOpen }) => {
  const [apes, setApes] = useState(null);
  const [apeProp, setApeProp] = useState(null);
  const [open, setOpen] = useState(false);
  const [owner, setOwner] = useState(null);
  const [tradeStatus, setTradeStatus] = useState(false);
  const [price, setPrice] = useState(null);
  const [lastSoldPrice, setLastSoldPrice] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [updatedName, setUpdatedName] = useState("");
  const [namesList, setNamesList] = useState(null);
  const [openForSaleList, setOpenForSaleList] = useState(null);

  const Fetch = async () => {
    // const url = "http://localhost:4000/gallery";
    const url = "https://api.kraznikunderverse.com/gallery";
    // const url = "https://buildit-gallery.kraznikunderverse.com/gallery";
    if (properties) {
      const res = await axios.post(url, properties);
      console.log(res.data);
      setApes(res.data.data);
    }
  };

  useEffect(() => {
    Fetch();
  }, [properties]);

  const fetchOwner = async () => {
    const owner = await CaesarNFT.methods.ownerOf(apeProp.id).call();
    setOwner(owner);
  };

  const fetchPrice = async () => {
    const token = await CaesarMarketplace.methods.tokens(apeProp.id).call();
    console.log(token);
    setLastSoldPrice(token.worth);
    // if (token.ownerAddress !== "0x0000000000000000000000000000000000000000") {
    //   setOwner(token.ownerAddress);
    // }
  };

  const fetchTokenStatus = async () => {
    const trade = await CaesarMarketplace.methods.trades(apeProp.id).call();
    // console.log(trade);

    if (trade.status === openInHex) {
      console.log("token in open for sale");
      setTradeStatus(true);
      setPrice(trade.price);
      setOwner(trade.seller);
    } else {
      fetchOwner();
      fetchPrice();
    }
  };

  const fetchTotalSupply = async () => {
    const supply = await CaesarNFT.methods.totalSupply().call();
    console.log(supply);
    setTotalSupply(supply);
  };

  const fetchNewName = async () => {
    const name = await CaesarNFT.methods.getName(apeProp.id).call();
    setUpdatedName(name);
  };

  useEffect(() => {
    setTradeStatus(false);
    setPrice(null);
    setOwner(null);
    setLastSoldPrice(null);
    if (apeProp) {
      fetchTokenStatus();
      fetchNewName();
    }
  }, [apeProp]);

  useEffect(() => {
    fetchTotalSupply();
  }, []);

  const fetchUpdatedNames = async () => {
    let names = [];
    for (let tokId = 1; tokId <= totalSupply; tokId++) {
      const name = await CaesarNFT.methods.getName(tokId).call();
      names.push(name);
    }
    console.log(names);
    setNamesList(names);
  };

  const fetchOpenForSale = async () => {
    let openForSale = [];

    for (let tokId = 1; tokId <= totalSupply; tokId++) {
      const trade = await CaesarMarketplace.methods.trades(tokId).call();
      if (trade.status === openInHex) {
        console.log(`${tokId} in open for sale`);
        openForSale.push(tokId);
      }
    }

    setOpenForSaleList(openForSale);
  };

  useEffect(() => {
    if (totalSupply > 0) {
      fetchUpdatedNames();
      fetchOpenForSale();
    }
  }, [totalSupply]);

  const ownerAddress = owner
    ? owner.slice(0, 4) + "...." + owner.slice(-4)
    : null;

  // useEffect(() => {
  //   if (apeProp && !tradeStatus) {
  //     fetchPrice();
  //   }
  // }, [apeProp]);

  const onBuy = async () => {
    await CaesarMarketplace.methods.buyCsrNFT(apeProp.id).send({
      from: account,
      value: price,
    });
    window.location.reload();
  };

  return (
    <Container>
      {/* <Text>ApeGallery Images</Text> */}
      {apes ? (
        <GridView>
          {apes.map((ape, index) => {
            if (ape.id > totalSupply) return null;
            if (onlyShowOpen) {
              if (!(openForSaleList && openForSaleList.includes(ape.id)))
                return null;
            }

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
                    {/* <div className="id"> APE#{ape.id}</div> */}
                    {/* <div className="id"> {ape.name}</div> */}
                    <div className="id">
                      {namesList && namesList[ape.id - 1] !== ""
                        ? namesList[ape.id - 1]
                        : ape.name}
                    </div>
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
                  <div className="number">
                    {updatedName === "" ? apeProp.name : updatedName}
                  </div>
                  <Content>
                    <Left>
                      <ImgWrapper start={""}>
                        <div className="owner">
                          <a
                            href={`https://rinkeby.etherscan.io/address/${owner}`}
                            target="_blank"
                          >
                            Owner: {ownerAddress}
                          </a>
                        </div>
                        <ModalImg src={apeProp.image} alt={apeProp.name} />

                        {tradeStatus ? (
                          <>
                            {/* <button className="objkt" onClick={onBuy}>
                              {" "}
                              Buy Now{" "}
                            </button> */}
                            <NotOnSale onClick={onBuy}> Buy now </NotOnSale>
                            <div className="worth">
                              Price: {price / 10 ** 18} MATIC
                            </div>
                          </>
                        ) : (
                          <>
                            <NotOnSale> Not on sale</NotOnSale>
                            <div className="worth">
                              Last sold price: {lastSoldPrice / 10 ** 18} MATIC
                            </div>
                          </>
                        )}

                        {/* <CurrentOwnerContainer> Owner :   
                         <Owner>  0xdd48e11744c2b003B59A1D2CED61703a10306bb1</Owner>
                       </CurrentOwnerContainer>
                         */}
                      </ImgWrapper>
                    </Left>

                    <Right>
                      <Rank>
                        {" "}
                        Rarity Rank : {apeProp.rarityRank}
                        {/* Null */}
                      </Rank>
                      <Heading> Gender </Heading>
                      <Trait> {apeProp.gender ? apeProp.gender : "None"}</Trait>
                      <Heading> Hair </Heading>
                      <Trait> {apeProp.hair ? apeProp.hair : "None"}</Trait>
                      <Heading> Skin </Heading>
                      <Trait> {apeProp.skin ? apeProp.skin : "None"}</Trait>
                      <Heading> Eyewear </Heading>
                      <Trait>
                        {" "}
                        {apeProp.eyewear ? apeProp.eyewear : "None"}
                      </Trait>

                      <Heading> Clothes </Heading>
                      <Trait> {apeProp.cloth ? apeProp.cloth : "None"}</Trait>
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
