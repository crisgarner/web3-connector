import { Connectors } from "web3-react";
import WalletConnectApi from "@walletconnect/web3-subprovider";
import FortmaticApi from "fortmatic";
import PortisApi from "@portis/web3";

const {
  InjectedConnector,
  WalletConnectConnector,
  FortmaticConnector,
  PortisConnector
} = Connectors;

const defaultNetwork = 1;
const supportedNetworkURLs = {
  1: process.env.REACT_APP_INFURA_MAINNET_URL,
  4: process.env.REACT_APP_INFURA_RINKEBY_URL
};
const Fortmatic = new FortmaticConnector({
  api: FortmaticApi,
  apiKey: process.env.REACT_APP_FORTMATIC_API_KEY,
  logoutOnDeactivation: false,
  testNetwork: "rinkeby"
});

const WalletConnect = new WalletConnectConnector({
  api: WalletConnectApi,
  bridge: "https://bridge.walletconnect.org",
  supportedNetworkURLs,
  defaultNetwork
});
const Injected = new InjectedConnector();

const Portis = new PortisConnector({
  api: PortisApi,
  dAppId: process.env.REACT_APP_FORTMATIC_API_KEY,
  network: "rinkeby"
});

export default {
  Injected,
  WalletConnect,
  Fortmatic,
  Portis
};
