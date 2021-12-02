import React from "react";
import { TextWrapper } from "../../Hero/InfoSection.elements";
import Multiselect from 'multiselect-react-dropdown';
import "./style.css";


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
        


        <Dropdown>
        {/* <Multiselect
          isObject={false}
          onKeyPressFn={function noRefCheck(){}}
          onRemove={function noRefCheck(){}}
          onSearch={function noRefCheck(){}}
          onSelect={function noRefCheck(){}}
          options={[
             'Option 1',
            'Option 2',
            'Option 3',
            'Option 4',
            'Option 5'
              ]}
/> */}
        </Dropdown>

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
