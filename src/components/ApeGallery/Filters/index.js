import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown/Dropdown";
import "./style.css";

const Container = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
  /* margin-left: 50px; */
  /* padding-left: 50px; */
  /* position: relative; */
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
    <Container>
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
      </Filter>
    </Container>
  );
};

export default Index;
