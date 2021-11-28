import web3 from "./web3";
import abi from "./build/CSRToken.json";

const CSRToken = new web3.eth.Contract(
  abi,
  "0x1619CE768bC9a18D62c045CB3cCE1287989e594a" // rinkeby
);

export default CSRToken;
