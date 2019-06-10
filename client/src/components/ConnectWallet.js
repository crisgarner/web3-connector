import React from "react";
import { useWeb3Context } from "web3-react";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import { Heading, Button, Card, Text, Icon, Image } from "rimble-ui";
import { Container } from "reactstrap";
import "./ConnectWallet.scss";
import metamaskLogo from "../assets/metamask.png";
import portisLogo from "../assets/portis.jpg";
import fortmaticLogo from "../assets/fortmatic.png";
import walletConnectLogo from "../assets/walletConnect.svg";

const ConnectWallet = () => {
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
        <Card width={"420px"} mx={"auto"} px={4}>
          <Text
            caps
            fontSize={0}
            fontWeight={4}
            mb={3}
            display={"flex"}
            alignItems={"center"}
          >
            <Icon name={"AccountBalanceWallet"} mr={2} />
            Connect your Wallet:
          </Text>
          <Container>
            <Button.Outline
              width={1}
              className="mt-2 buttonLogo"
              onClick={() => context.setConnector("Injected")}
            >
              <Image alt="metamask" src={metamaskLogo} className="mr-1" />
              Use MetaMask
            </Button.Outline>
            <Button.Outline
              width={1}
              className="mt-2 buttonLogo"
              onClick={() => context.setConnector("WalletConnect")}
            >
              <Image
                alt="WalletConnect"
                className="mr-2"
                src={walletConnectLogo}
              />
              Use WalletConnect
            </Button.Outline>
            <Button.Outline
              width={1}
              className="mt-2 buttonLogo"
              onClick={() => context.setConnector("Fortmatic")}
            >
              <Image alt="Fortmatic" className="mr-2" src={fortmaticLogo} />
              Use Fortmatic
            </Button.Outline>
            <Button.Outline
              width={1}
              className="mt-2 buttonLogo"
              onClick={() => context.setConnector("Portis")}
            >
              <Image alt="Portis" className="mr-2" src={portisLogo} />
              Use Portis
            </Button.Outline>
          </Container>
        </Card>
      </>
    );
  } else if (context.error) {
    return (
      <Card width={"420px"} mx={"auto"} px={4}>
        <Text
          caps
          fontSize={0}
          fontWeight={4}
          mb={3}
          display={"flex"}
          alignItems={"center"}
        >
          <Icon name={"AccountBalanceWallet"} mr={2} />
          Connect your Wallet:
        </Text>
        <Heading.h5 color="danger" className="mt-2 mb-2 text-center">
          Couldn't connect to wallet, try again
        </Heading.h5>
        <Container>
          <Button.Outline
            width={1}
            className="mt-2 buttonLogo"
            onClick={() => context.setConnector("Injected")}
          >
            <Image alt="metamask" src={metamaskLogo} className="mr-1" />
            Use MetaMask
          </Button.Outline>
          <Button.Outline
            width={1}
            className="mt-2 buttonLogo"
            onClick={() => context.setConnector("WalletConnect")}
          >
            <Image
              alt="WalletConnect"
              className="mr-2"
              src={walletConnectLogo}
            />
            Use WalletConnect
          </Button.Outline>
          <Button.Outline
            width={1}
            className="mt-2 buttonLogo"
            onClick={() => context.setConnector("Fortmatic")}
          >
            <Image alt="Fortmatic" className="mr-2" src={fortmaticLogo} />
            Use Fortmatic
          </Button.Outline>
          <Button.Outline
            width={1}
            className="mt-2 buttonLogo"
            onClick={() => context.setConnector("Portis")}
          >
            <Image alt="Portis" className="mr-2" src={portisLogo} />
            Use Portis
          </Button.Outline>
        </Container>
      </Card>
    );
  } else {
    const { active, connectorName, account, networkId } = context;
    return (
      <>
        <h1>web3-react Demo</h1>
        <h3>(Here you can show your dApp)</h3>
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
};

export default ConnectWallet;
