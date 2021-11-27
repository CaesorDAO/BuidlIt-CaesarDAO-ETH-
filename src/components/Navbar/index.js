import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import Image from "../../images/image.png";
import "./style.css";

const Navbars = ({ account, onConnectWallet, onDisconnect }) => {
  const address = account
    ? account.slice(0, 8) + "...." + account.slice(-8)
    : null;

  return (
    <Navbar className="app">
      <Container className="test">
        <Navbar.Brand>
          <Link to="/">
            <img alt="" src={Image} className="logo" />{" "}
          </Link>
        </Navbar.Brand>

        <div className="gallery-nav">
          <Link
            // to="/"
            to="/gallery"
          >
            Marketplace
          </Link>
          {/* <div className="hide">Coming soon</div> */}
        </div>

        <div className="gallery-nav">
          <Link
            // to="/"
            to="/mint"
          >
            Mint
          </Link>
          {/* <div className="hide">Coming soon</div> */}
        </div>

        <div className="gallery-nav">
          <Link to="/Staking">Staking</Link>
          {/* <div className="hide">Coming soon</div> */}
        </div>

        {account ? (
          <Button className="test2" onClick={onDisconnect}>
            {address}
          </Button>
        ) : (
          <Button className="test2" onClick={onConnectWallet}>
            {" "}
            Connect Wallet{" "}
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Navbars;
