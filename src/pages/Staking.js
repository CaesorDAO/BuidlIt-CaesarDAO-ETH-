import React from "react";
import Image from "../images/Group 91.png";

import Order from "../components/Staking/Order";

const Staking = ({ account }) => {
  return (
    <div style={{ width: "100vw", display: "grid", justifyContent: "center" }}>
      <img src={Image} height="400px" width="1000px" margin-left="400px"></img>
      <Order account={account} />
    </div>
  );
};

export default Staking;
