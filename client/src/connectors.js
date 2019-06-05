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
  1: "https://mainnet.infura.io/v3/60ab76e16df54c808e50a79975b4779f",
  4: "https://rinkeby.infura.io/v3/60ab76e16df54c808e50a79975b4779f"
};
const Fortmatic = new FortmaticConnector({
  api: FortmaticApi,
  apiKey: "pk_test_C6808B2B488687F6",
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
  dAppId: "36a9597d-efb9-4710-b490-5c61f7d42ea3",
  network: "rinkeby"
});

export default {
  Injected,
  WalletConnect,
  Fortmatic,
  Portis
};
