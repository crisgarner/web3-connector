import React from "react";
import { useWeb3Context } from "web3-react";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import { Card, Text, Icon, MetaMaskButton } from "rimble-ui";

export default function ConnectWallet() {
  const context = useWeb3Context();

  if (context.active && context.connectorName === "WalletConnect") {
    if (!context.account) {
      WalletConnectQRCodeModal.open(
        context.connector.walletConnector.uri,
        () => {}
      );
    } else {
      try {
        WalletConnectQRCodeModal.close();
      } catch {}
    }
  }

  if (!context.active && !context.error) {
    // loading
    return (
      <>
        <button onClick={() => context.setConnector("Injected")}>
          Activate Metamask
        </button>
        <button onClick={() => context.setConnector("WalletConnect")}>
          Activate WalletConnect
        </button>
        <button onClick={() => context.setConnector("Fortmatic")}>
          Activate Fortmatic
        </button>
        <button onClick={() => context.setConnector("Portis")}>
          Activate Portis
        </button>
      </>
    );
  } else if (context.error) {
    //error
    return <h1>error</h1>;
  } else {
    // success

    const { active, connectorName, account, networkId } = context;

    return (
      <>
        <h1>web3-react Demo</h1>
        <h3>(latest)</h3>
        <p>Active Connector: {connectorName}</p>
        <p>Account: {account || "None"}</p>
        <p>Network ID: {networkId}</p>
        <p>
          {(context.active || (context.error && context.connectorName)) && (
            <button onClick={() => context.unsetConnector()}>
              {context.active ? "Deactivate Connector" : "Reset"}
            </button>
          )}
        </p>
      </>
    );
  }
}
