import React, { Component } from "react";
import Web3Provider from "web3-react";
import "./App.scss";
import connectors from "./connectors";
import ConnectWallet from "./components/ConnectWallet";

import web3 from "web3";

class App extends Component {
  componentDidMount = async () => {};

  render() {
    return (
      <Web3Provider
        connectors={connectors}
        libraryName={"web3.js"}
        web3Api={web3}
      >
        <ConnectWallet />
      </Web3Provider>
    );
  }
}

export default App;
