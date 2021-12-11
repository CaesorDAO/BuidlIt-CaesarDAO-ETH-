import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { FaWallet } from "@react-icons/all-files/fa/FaWallet";

import "./style.css";
import Logo from "../../../images/wallet.png";

const Container = styled.div`
  display: flex;

  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    justify-content: center;
    margin-bottom: 80px;
  }
`;

const Text = styled.div`
  color: white !important;
  font-size: 40px;
  /* padding: 0px 0px 40px 0px; */
  margin-bottom: 60px;
`;

const Filter = styled.div`
  height: 550px;
  width: 250px;
  position: absolute;
  background-color: #1b1b1b;
  padding: 10px 15px;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    position: relative;
  }
`;

const Wallet = styled.div`
  height: 60px;
  width: 250px;
  position: absolute;
  background-color: #1b1b1b;
  margin: 580px 0 0 0;
  padding: 10px 15px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    outline: white;
    border: 1px solid grey;
  }

  @media screen and (max-width: 600px) {
    /* position: relative; */
  }
`;

const Text1 = styled.div`
  color: black !important;
  font-size: 25px;
  padding: 20px 20px;
  /* text-align: center; */

  &:hover {
    cursor: pointer;
  }
`;

const SearchBar = styled.input`
  border-radius: 100px;
  border: 0.1px solid grey;
  padding: 12px;
  font-size: 15px;
  margin: 0 0 0 5px;
  width: 200px;
  margin: 0 0 0 0px;
  background-color: #1b1b1b;
  /* font-color: grey; */
  color: white;
  text-align: center;
`;

const attributes = [
  {
    name: "bg",
    traitTypes: ["Lavender", "Crayola's Dandelion", "Light Cobalt Blue", "Teal"],
  },
  {
    name: "cloth",
    traitTypes: ["Kurta.001", "T-Shirt.002", "Shirt.001", "Hoodie.001", "Suit.001", "NightWear.001", "Off Shoulder.001","Sport Bra.001","Boat Neck.001",""],
  },

  {
    name: "eyewear",
    traitTypes: ["Wayfarer.001", "Royal Sunglass.001", "ThugLife.001", "3D Glass.001","Royal Sunglass.001","Lipstick.001","Necklace.001","Ear Ring.001","Nose Ring.001","Piercing.001"],
  },
  {
    name: "gender",
    traitTypes: ["Male", "Female"],
  },
  {
    name: "hair",
    traitTypes: [
      "Hair 3.001","Hair 4.001","Hair 2.001","Hair 1.001","Hair 5.001",
      "Double Bun.001",
      "Open Hair.001",
      "Single Bun.001",
      "Pony Tail.001",
      "Double Bun Open Hair.001"
    ],
  },
  {
    name: "skin",
    traitTypes: ["White Male.001", "Brown Male.001", "Blue Male.001", "Black Male.001", "Dual Skin Male.001", "White Female.001", "Green Female.001", "Brown Female.001", "Dual Female.001", "Black Female.001"],
  },
];

const Index = ({
  properties,
  setProperties,
  setOnlyShowOpen,
  onlyShowOpen,
}) => {
  const [reset, setReset] = useState(false);
  const [tokenId, setTokenId] = useState("");

  return (
    <>
      <Container>
        <Wallet>
          <Link to="/MyWalletGallery">
            <img
              src={Logo}
              className="wallet-icons"
              height="30px"
              width="30px"
            />
            <h1 className="my-wallet"> My Wallet </h1>
          </Link>
        </Wallet>
        <Filter>
          {/* Search bar */}
          {/* <input type="number" /> */}
          <SearchBar
            placeholder="SEARCH BY ID"
            type="number"
            value={tokenId}
            onChange={(e) => {
              setTokenId(e.target.value);
              setProperties({ id: e.target.value });
            }}
          />

          <button
            className="reset"
            style={{
              marginTop: "10px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
            onClick={() => setOnlyShowOpen(!onlyShowOpen)}
          >
            On Sale
          </button>

          {attributes.map((attr) => {
            return (
              <Dropdown
                key={attr.name}
                properties={properties}
                setProperties={setProperties}
                attribute={attr.name}
                traitTypes={attr.traitTypes}
                reset={reset}
                setReset={setReset}
              />
            );
          })}

          <button
            className="reset"
            onClick={() => {
              setProperties({
                bg: "",
                cloth: "",
                eyewear: "",
                gender: "",
                hair: "",
                skin: "",
                id: "",
              });
              setTokenId("");
              setOnlyShowOpen(false);
              setReset(true);
            }}
          >
            RESET FILTERS
          </button>
          {/* <button className="wallet"> 
        <img src={BiWallet}/>
        My Wallet </button> */}
        </Filter>
      </Container>
    </>
  );
};

export default Index;
