import web3 from "./web3";
import abi from "./build/CaesarMarketplace.json";

const CaesarMarketplace = new web3.eth.Contract(
  abi,
  // "0x5F2e72a7aD4c0144CeA24e32d482D28D611f7f1b"
  // "0x924088B2f8FEB5fF02C169B24AF5525d3339453c"
  "0x5A7BE2cbfE804EEdeCF6B646405668c29DD9b6C2" // for hackathon
);

export default CaesarMarketplace;
