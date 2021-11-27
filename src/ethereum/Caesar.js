import web3 from "./web3";
import abi from "./build/Caesar.json";

const CaesarToken = new web3.eth.Contract(
  abi,
  // "0x0E37d92Be342521c75EeFC2BB6c644cd548A1952" //rinkeby
  "0xf802953D541A16279944e2759D77c99C2462BaA4"
);

export default CaesarToken;
