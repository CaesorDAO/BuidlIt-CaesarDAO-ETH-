import React, { useState, useEffect } from "react";
import { Container, Tokens, Title, Description } from "./StakingElements";

import CaesarNFT from "../../../ethereum/CaesarNFT";

const Available = ({ account }) => {
  const [tokenUnstaked, settokenUnstaked] = useState(0);

  const calcAvailableToStake = async () => {
    const tokenArray = await CaesarNFT.methods.walletQuery(account).call();
    console.log(tokenArray);
    settokenUnstaked(tokenArray.length);
  };

  useEffect(() => {
    if (account) calcAvailableToStake();
  }, []);

  return (
    <div>
      <Container>
        <Tokens> {tokenUnstaked}</Tokens>
        <Title>
          {" "}
          NFT's available <br></br>to stake{" "}
        </Title>
        <Description> Earn $CSR by staking CaesorDAO NFT's </Description>
      </Container>
    </div>
  );
};

export default Available;
