import web3 from "./web3";
import abi from "./build/CaesarNFT.json";

const CaesarNFT = new web3.eth.Contract(
  abi,
  // "0x1997F800b0FB2Fd1C0bAEb04C7e58fb800714049"
  // "0xE8B4d070Cb598FFB733a48bBe28FAEca18d7dC00" // set name feature
  "0xD58d8C5274483B761BB375243F1cC88adBa151C5"
);

export default CaesarNFT;
