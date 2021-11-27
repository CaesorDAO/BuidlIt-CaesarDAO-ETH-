
import React from 'react'; 
import {Container, Title,AccountBalance,Balances, Token} from "./balance-elements"

var token = '6969';

const Balance = () => {
    return (
        <div>
            <Container>

                <Title> Account Balance </Title>

                <AccountBalance>
                    <Balances> {token}</Balances>
                </AccountBalance>
                <Token>$CSR</Token>

                

            </Container>
            
        </div>
    )
}

export default Balance;
