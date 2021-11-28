import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  AccountBalance,
  Balances,
  Token,
} from "./balance-elements";

import CSRToken from "../../../ethereum/CSRToken";

const Balance = ({ account }) => {
  const [tokenBalance, settokenBalance] = useState(0);
  useEffect(() => {
    const calcBalance = async () => {
      const tokenBal = await CSRToken.methods.balanceOf(account).call();
      settokenBalance(tokenBal / 10 ** 18);
    };
    if (account) calcBalance();
  }, []);
  return (
    <div>
      <Container>
        <Title> Account Balance </Title>

        <AccountBalance>
          <Balances> {tokenBalance}</Balances>
        </AccountBalance>
        <Token>$CSR</Token>
      </Container>
    </div>
  );
};

export default Balance;
