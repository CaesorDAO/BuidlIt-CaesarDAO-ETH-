import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navbars from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ApeGallery from "./pages/ApeGallery";
import Minting from "./pages/Minting";
import Staking from "./pages/Staking";

import "./App.css";

import Web3Modal from "web3modal";
import web3 from "./ethereum/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const infuraId =
  "https://rinkeby.infura.io/v3/97c2d52095a84da7a0b710a8daa16acf";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: infuraId, // required
    },
  },
};

const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});
let provider;

const App = () => {
  const [account, setaccount] = useState("");

  const onConnectWallet = async () => {
    console.log("connecting wallet...");
    console.log("cached provider", web3Modal.cachedProvider);
    try {
      provider = await web3Modal.connect();
    } catch (err) {
      console.log("Could not get a wallet connection", err);
      return;
    }
    web3.setProvider(provider);
    const accounts = await web3.eth.getAccounts();
    setaccount(accounts[0]);
  };

  const onDisconnect = async (e) => {
    e.preventDefault();

    console.log(
      "cached provider before provider.close(): ",
      web3Modal.cachedProvider
    );
    console.log("Killing the session", web3.currentProvider);
    console.log("web3.givenProvider", web3.givenProvider);

    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }

    console.log(
      "cached provider after provider.close(): ",
      web3Modal.cachedProvider
    );
    web3Modal.clearCachedProvider();
    console.log("cached provider after clear: ", web3Modal.cachedProvider);
    provider = null;
    setaccount("");
    window.location.reload();
  };

  useEffect(() => {
    async function listenMMAccount() {
      try {
        window.ethereum.on("accountsChanged", async function () {
          // Time to reload your interface with accounts[0]!
          const account = await web3.eth.getAccounts();
          setaccount(account[0]);
          // accounts = await web3.eth.getAccounts();
          console.log(account);
        });
      } catch (err) {
        console.log("Browser wallet not installed!");
      }
    }

    listenMMAccount();
  }, []);

  useEffect(() => {
    // alert("Connect to mainnet!");
    onConnectWallet();
  }, []);

  return (
    <div className="app-container">
      <Navbars
        account={account}
        onConnectWallet={onConnectWallet}
        onDisconnect={onDisconnect}
      />
      <Switch>
        <Route exact path="/" component={() => <Home />} />

        <Route exact path="/gallery" component={() => <ApeGallery />} />
        <Route
          exact
          path="/mint"
          component={() => <Minting account={account} />}
        />
        <Route exact path="/staking" component={() => <Staking />} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
