import web3 from "./web3";
import abi from "./build/CaesarStaking.json";

const CaesarStaking = new web3.eth.Contract(
  abi,
  "0xD3C2AE5146DbE8b74323E2280Ec7CAA49ae94d64"
);

export default CaesarStaking;
