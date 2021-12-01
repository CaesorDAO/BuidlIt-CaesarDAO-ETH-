import web3 from "./web3";
import abi from "./build/CaesarNFT.json";

const CaesarNFT = new web3.eth.Contract(
  abi,
  "0x1997F800b0FB2Fd1C0bAEb04C7e58fb800714049"
);

export default CaesarNFT;
