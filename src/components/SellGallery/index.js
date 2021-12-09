import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Route,
  Switch,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";

import Filters from "./Filters/index";
import ImageGrid from "./ImageGrid/index";

import ScrollButton from "./ScrollButton/ScrollButton";

import CaesarNFT from "../../ethereum/CaesarNFT";
import CaesarMarketplace from "../../ethereum/CaesarMarketplace";

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

const SellerNavbar = styled.div`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  width: auto;
  /* padding: 0 0 20px 150px; */
  margin-bottom: 30px;
  justify-content: center;
`;

const Unlisted = styled(NavLink)`
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
    div {
      color: black;
    }
  }

  &.selected {
    background-color: white;
    div {
      color: black;
    }
  }
`;

const OnSale = styled(NavLink)`
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
    div {
      color: black;
    }
  }

  &.selected {
    background-color: white;
    div {
      color: black;
    }
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

const SellGallery = ({ account }) => {
  const [properties, setProperties] = useState({
    bg: "",
    cloth: "",
    eyewear: "",
    gender: "",
    hair: "",
    skin: "",
  });

  const [ownedTokensList, setOwnedTokens] = useState([]);
  const [saleTokensList, setSaleTokensList] = useState([]);
  // const [tokensList, setTokensList] = useState([]);

  const ownedTokens = async () => {
    try {
      const ownedTokensArray = await CaesarNFT.methods
        .walletQuery(account)
        .call();

      setOwnedTokens(ownedTokensArray);

      // console.log("owned tokens array: ", ownedTokensArray);

      // ownedTokensArray.map((tokenId) => {
      //   setProperties({ id: tokenId });
      // });
    } catch (err) {
      console.error(err);
    }
  };

  const calcSaleTokens = async () => {
    try {
      const saleTokensArray = await CaesarMarketplace.methods
        .getSales(account)
        .call();
      setSaleTokensList(saleTokensArray);

      // console.log("sale tokens array: ", saleTokensArray);
      // await saleTokensArray.map((tokenId) => {
      //   setProperties({ id: tokenId });
      // });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (account) ownedTokens();
  }, []);

  return (
    <Router>
      <SellerNavbar>
        <Unlisted
          exact
          to="/MyWalletGallery"
          activeClassName="selected"
          onClick={ownedTokens}
        >
          <Heading>Unlisted </Heading>
        </Unlisted>
        <OnSale
          exact
          to="/MyWalletGallery/onsale"
          activeClassName="selected"
          onClick={calcSaleTokens}
        >
          {" "}
          <Heading>On Sale </Heading>{" "}
        </OnSale>
      </SellerNavbar>
      <Switch>
        <Route
          exact
          path="/MyWalletGallery"
          component={() => (
            <>
              <Container>
                <Filters
                  properties={properties}
                  setProperties={setProperties}
                />
                <ImageGrid
                  properties={properties}
                  setProperties={setProperties}
                  ownedTokensList={ownedTokensList}
                  account={account}
                />
              </Container>
              <ScrollButton />
            </>
          )}
        />
        <Route
          path="/MyWalletGallery/onsale"
          component={() => (
            <>
              <Container>
                <Filters
                  properties={properties}
                  setProperties={setProperties}
                />
                <ImageGrid
                  properties={properties}
                  setProperties={setProperties}
                  ownedTokensList={saleTokensList}
                  account={account}
                />
              </Container>
              <ScrollButton />
            </>
          )}
        />
      </Switch>
    </Router>
  );
};

export default SellGallery;
