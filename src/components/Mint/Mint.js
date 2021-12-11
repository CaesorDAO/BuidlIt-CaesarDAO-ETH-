import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import MacBookPro from "../../images/mint.png";
import Modal from "./Modal/Modal";

import {
  Container,
  Header,
  Img,
  Show,
  Quantity,
  Price,
  Choose,
  Box,
  Button,
  Supply,
  MintedCount,
  Total,
} from "./Mint.elements";

import CaesarToken from "../../ethereum/CaesarNFT";

const Mint = ({ account }) => {
  const [buyValue, setBuyValue] = useState(null);
  const [minted, setMinted] = useState(false);
  const [minting, setMinting] = useState(false);
  const [mintedSupply, setMintedSupply] = useState(0);

  const [txnHash, setTxnHash] = useState(null);

  const [verified, setVerified] = useState(false);

  useEffect(() => {
    async function contractData() {
      const supply = await CaesarToken.methods.totalSupply().call();
      setMintedSupply(supply);
    }
    contractData();
  }, []);

  const onMint = async () => {
    console.log("minting...");
    setMinting(true);
    // setTimeout(() => {
    //   setMinted(true);
    //   setMinting(false);
    // }, 1000);

    try {
      console.log("Minting..");
      let priceToPay =
        (await CaesarToken.methods.caesarPrice().call()).toString() * buyValue;
      console.log("price to pay: ", priceToPay);
      const txn = await CaesarToken.methods
        .mintCaesars(buyValue)
        .send({ from: account, value: priceToPay });

      console.log(txn.transactionHash);
      setTxnHash(txn.transactionHash);

      setMinted(true);
      setMinting(false);
      setVerified(false);

      //   alert("Minted Succesfully");
      // window.location.reload();
    } catch (err) {
      alert("Please try again after 50 seconds");
      setMinting(false);
      console.log(err);
    }
  };

  return (
    <Container>
      <Header>Minting is LIVE!!</Header>
      <Img src={MacBookPro} />
      <Show>
        <Quantity>
          {buyValue ? (
            <span>
              Buying <b>{buyValue}</b> Caesar token for
            </span>
          ) : (
            <span>Choose from below ...</span>
          )}
        </Quantity>
        <Price>
          {buyValue ? <span>{0.01 * buyValue} ETH</span> : <span>0 ETH</span>}
        </Price>
      </Show>
      <Choose>
        {(() => {
          let boxes = [];
          for (let i = 1; i <= 4; i++) {
            boxes.push(
              <Box
                key={i}
                onClick={() => setBuyValue(i)}
                style={{
                  backgroundColor: buyValue === i ? "#62baf3" : null,
                  //   backgroundColor: buyValue === i ? "#322f2f" : null,
                  //   color: buyValue === i ? "white" : null,
                }}
              >
                {i}
              </Box>
            );
          }
          return boxes;
        })()}
      </Choose>
      <ReCAPTCHA
        // ref={recaptchaRef}
        sitekey="6LfAhSkdAAAAAHVLdSSUu1pIbXTT-LgDEWEpCLB5"
        onChange={() => setVerified(true)}
        theme="dark"
      />
      <Button disabled={!verified} onClick={onMint}>
        {minting ? <span>Minting ...</span> : <span> Mint Now</span>}
      </Button>
      <Supply>
        <MintedCount>{mintedSupply}</MintedCount>
        <Total>10000</Total>
      </Supply>
      <Modal open={minted} setOpen={setMinted} txnHash={txnHash} />
    </Container>
  );
};

export default Mint;
