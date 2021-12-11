import web3 from "./web3";
import abi from "./build/CaesarStaking.json";

const CaesarStaking = new web3.eth.Contract(
  abi,
  // "0xD3C2AE5146DbE8b74323E2280Ec7CAA49ae94d64"
  // "0x3A316e28dfb781fbdc9619fE7f20b59a3a9A523B"
  "0xb3De5d3cFcB85e9C30b59a829126209088e31930" // for hackathon
);

export default CaesarStaking;
