import React, { useEffect, useState, Component } from "react";

import CaesarStaking from "../../../ethereum/CaesarStaking";
import AnimatedNumber from "animated-number-react";
import {
  Container,
  Title,
  RewardTokens,
  Claim,
  UserEarning,
  PLatformEarning,
} from "./Rewards-elements";

var userTokenEarning = "10";

const Rewards = ({ account }) => {
  const [totalRewards, settotalRewards] = useState(0);

  const calcRewards = async () => {
    const tokenIds = await CaesarStaking.methods.depositsOf(account).call();
    console.log(tokenIds);
    const rewardsArray = await CaesarStaking.methods
      .calculateRewards(account, tokenIds)
      .call();
    console.log(rewardsArray);

    let rewardsTotal = 0;
    rewardsArray.map((reward) => {
      rewardsTotal += reward / 10 ** 18;
    });
    settotalRewards(rewardsTotal);
  };

  useEffect(() => {
    if (account) calcRewards();
  }, [totalRewards]);

  const onClaim = async () => {
    const tokenIds = await CaesarStaking.methods.depositsOf(account).call();
    await CaesarStaking.methods.claimRewards(tokenIds).send({ from: account });
    window.location.reload();
  };

  return (
    <div>
      <Container>
        <Title>Your Rewards </Title>

        <RewardTokens>{totalRewards.toFixed(5)}</RewardTokens>

        <Claim onClick={onClaim}>Claim</Claim>

        <UserEarning> Earning {userTokenEarning} $CSR/Day</UserEarning>

        <PLatformEarning> Earn upto 15 $CSR/NFT/Day</PLatformEarning>
      </Container>
    </div>
  );
};

export default Rewards;
