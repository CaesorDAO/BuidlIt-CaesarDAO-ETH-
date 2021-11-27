import React from 'react'; 
import {Container, Tokens,Title, Description} from "./StakingElements"; 
var tokenUnstaked = "3";

const Available = () => {
    return (
        <div>
            <Container>

                <Tokens> {tokenUnstaked}</Tokens>
                <Title>Apes available <br></br>to stake </Title>
                <Description> Earn $KRZK by staking Kraznik Underverse Apes </Description>

            </Container>
            
        </div>
    )
}

export default Available;
