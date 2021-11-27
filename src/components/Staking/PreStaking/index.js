import React from 'react'; 
import {Container, Title, Description, Button} from "./PreStakingelements";

const Prestaking = () => {
    return (
        <div>
            <Container>

                <Title>Pre-Staking</Title>

                <Description>👉 Approve the contract to enable staking.</Description>
                <Description>👉 Once complete, stake your Apes.</Description>

                <Button> Approve Staking </Button>
            </Container>
            
        </div>
    )
}

export default Prestaking;
