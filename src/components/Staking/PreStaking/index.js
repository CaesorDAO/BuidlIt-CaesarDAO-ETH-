import React from "react";
import { Container, Title, Description, Button } from "./PreStakingelements";
import CaesarNFT from "../../../ethereum/CaesarNFT";

const stakingContractAddress = "0xD3C2AE5146DbE8b74323E2280Ec7CAA49ae94d64";

const Prestaking = ({ account }) => {
  const onApproveStaking = async () => {
    await CaesarNFT.methods
      .setApprovalForAll(stakingContractAddress, true)
      .send({ from: account });
  };

  return (
    <div>
      <Container>
        <Title>Pre-Staking</Title>

        <Description>👉 Approve the contract to enable staking.</Description>
        <Description>👉 Once complete, stake your NFT's.</Description>

        <Button onClick={onApproveStaking}> Approve Staking </Button>
      </Container>
    </div>
  );
};

export default Prestaking;
