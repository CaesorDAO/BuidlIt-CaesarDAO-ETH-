import React from 'react';
import { TextWrapper } from '../../Hero/InfoSection.elements';

import {Container, Title, Dropdown, Period, Description, Stake, Textwrapper} from "./StakingElements"; 
const Stakings = () => {
    return (
        <div>

            <Container>

                <Title>Staking</Title>

                <Dropdown></Dropdown>

                <Textwrapper>            
                <Period>30</Period>
                <Period>60</Period>
                <Period>90</Period>

                </Textwrapper>

    

                {/* <Description>You will get 12.5 $KRAZ/DAY</Description> */}

                <Stake>Stake</Stake>


            </Container>
            
        </div>
    )
};

export default Stakings;


