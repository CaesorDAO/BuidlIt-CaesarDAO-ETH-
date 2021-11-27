import React from 'react';
import {Container,Title,RewardTokens,Claim,UserEarning,PLatformEarning} from "./Rewards-elements"

var userTokenEarning = "10"; 
var UserStakingRewards = "69.420"; 

const Rewards = () => {
    return (
        <div>
            <Container>

                <Title>Your Rewards </Title>

                <RewardTokens>{UserStakingRewards}</RewardTokens>

                <Claim>Claim</Claim>

                <UserEarning> Earning {userTokenEarning} $KRZK/Day</UserEarning>

                <PLatformEarning> Earn upto 15 $KRZK/Ape/Day</PLatformEarning>

            </Container>
            
        </div>
    )
}

export default Rewards;
