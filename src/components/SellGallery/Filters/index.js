import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import { FaEdit } from '@react-icons/all-files/fa/FaEdit';


import "./style.css";
import Logo from '../../../images/wallet.png';

const Container = styled.div`
  display: flex;

  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const Text = styled.div`
  color: white !important;
  font-size: 40px;
  /* padding: 0px 0px 40px 0px; */
  margin-bottom: 60px;
`;

const Filter = styled.div`
  height: 600px;
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
  margin: 620px 0 0 0 ;
  padding: 10px 15px;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    position: relative;
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
    traitTypes: ["Blue", "Black", "Lime", "Teal"],
  },
  {
    name: "clothes",
    traitTypes: ["Hoodie", "Jersey", "Uniform", "Diamond Hands"],
  },
  {
    name: "eye",
    traitTypes: ["Stoner Eyes", "Eyelashes", "Green Glow", "Warrior Eyes"],
  },
  {
    name: "eyewear",
    traitTypes: ["3D Glasses", "Eyepatch", "Heart Glasses", "Sunglass"],
  },
  {
    name: "headwear",
    traitTypes: [
      "Angel",
      "Ancient",
      "Cap",
      "Cover",
      "Mask",
      "Sheikh",
      "Headphones",
    ],
  },
  {
    name: "mouthCosmetics",
    traitTypes: ["Pipe", "Podcast", "Bubble Gum", "Knife", "Fiat"],
  },
  {
    name: "neckwear",
    traitTypes: ["Bow", "Muffler", "Dog Tag", "Black Panther", "Scarf"],
  },
  {
    name: "skin",
    traitTypes: ["Radiation", "Blue", "Black", "Dragon Skin", "Wood"],
  },
];

const Index = ({ properties, setProperties }) => {
  const [reset, setReset] = useState(false);
  const [tokenId, setTokenId] = useState("");

  return (
    <>
    <Container>
    <Wallet >
      <Link to="/MyWalletGallery">
        <img src={Logo} className="wallet-icons"  height="30px" width="30px"/>
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
              clothes: "",
              eye: "",
              eyewear: "",
              headwear: "",
              mouthCosmetics: "",
              neckwear: "",
              skin: "",
              id: "",
            });
            setTokenId("");
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