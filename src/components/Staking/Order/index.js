import React from "react";
import { InfoCol, InfoWrapperRow } from "./OrderElements";
import Image from "../../../images/Group 91.png";

import Rewards from "../Rewards";

import PreStaking from "../PreStaking";
import Balance from "../Token-Balance";
import { Unstake } from "../Unstake";
import Available from "../Available";
import Stakings from "../Stakings/index.js";
import { ImgWrapper } from "../../Hero/InfoSection.elements";

const Order = ({ account }) => {
  return (
    <div>
      <InfoWrapperRow>
        <InfoCol>
          <PreStaking account={account} />
          <Stakings account={account} />
        </InfoCol>

        <InfoCol>
          <Available account={account} />
          <Unstake account={account} />
        </InfoCol>

        <InfoCol>
          <Rewards account={account} />
          <Balance account={account} />
        </InfoCol>
      </InfoWrapperRow>
    </div>
  );
};

export default Order;
