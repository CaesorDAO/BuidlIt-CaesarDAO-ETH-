import React from 'react'; 
import {Container, Tokens,Title, Description} from "./StakingElements"; 
var tokenUnstaked = "3";

const Available = () => {
    return (
        <div>
            <Container>

                <Tokens> {tokenUnstaked}</Tokens>
                <Title> NFT's available <br></br>to stake </Title>
                <Description> Earn $CSR by staking CaesorDAO NFT's </Description>

            </Container>
            
        </div>
    )
}

export default Available;
