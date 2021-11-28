import React from "react";
import { TextWrapper } from "../../Hero/InfoSection.elements";

import {
  Container,
  Title,
  Dropdown,
  Period,
  Description,
  Stake,
  Textwrapper,
} from "./StakingElements";

import CaesarStaking from "../../../ethereum/CaesarStaking";
import CaesarNFT from "../../../ethereum/CaesarNFT";

const Stakings = ({ account }) => {
  const onStake = async () => {
    const tokensArray = await CaesarNFT.methods.walletQuery(account).call();
    await CaesarStaking.methods.deposit(tokensArray).send({ from: account });
    window.location.reload();
  };

  return (
    <div>
      <Container>
        <Title>Staking</Title>

        <Dropdown></Dropdown>

        {/* <Textwrapper>
          <Period>30</Period>
          <Period>60</Period>
          <Period>90</Period>
        </Textwrapper> */}
        <br />

        {/* <Description>You will get 12.5 $KRAZ/DAY</Description> */}

        <Stake onClick={onStake}>Stake</Stake>
      </Container>
    </div>
  );
};

export default Stakings;
