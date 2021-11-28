import web3 from "./web3";
import abi from "./build/CaesarNFT.json";

const CaesarNFT = new web3.eth.Contract(
  abi,
  // "0x0E37d92Be342521c75EeFC2BB6c644cd548A1952" //rinkeby
  // "0xf802953D541A16279944e2759D77c99C2462BaA4"
  "0x1997F800b0FB2Fd1C0bAEb04C7e58fb800714049"
);

export default CaesarNFT;
