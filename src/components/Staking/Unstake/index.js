import React, { useEffect, useState } from "react";
import { Container, Number, Heading, Button } from "./Unstakeelements";

import CaesarStaking from "../../../ethereum/CaesarStaking";

export const Unstake = ({ account }) => {
  const [tokensToUnstake, settokensToUnstake] = useState([]);
  const onUnstake = async () => {
    await CaesarStaking.methods
      .withdraw(tokensToUnstake)
      .send({ from: account });
    window.location.reload();
  };
  useEffect(() => {
    const calc = async () => {
      console.log(account);
      const tokenArray = await CaesarStaking.methods.depositsOf(account).call();
      console.log(tokenArray);
      settokensToUnstake(tokenArray);
    };
    if (account) calc();
  }, []);
  return (
    <div>
      <Container>
        <Number> {tokensToUnstake.length} </Number>

        <Heading> NFT's available to Unstake </Heading>

        <Button onClick={onUnstake}> Unstake </Button>
      </Container>
    </div>
  );
};
