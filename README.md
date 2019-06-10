# Web3 Connector.

This is a simple component that I created in order to reuse for personal projects. Then component uses the ConsenSys Rimble UI System to add design to the [Web3-React Library](https://noahzinsmeister.gitbook.io/web3-react/) created by [@Noah Zinsmeister](https://twitter.com/noahzinsmeister).

## Requirements

- [Rimble UI](https://rimble.consensys.design/)
- [Web3-React Library](https://noahzinsmeister.gitbook.io/web3-react/)

## Usage

In this example we use the web3.js configuration for web3-react.

1. Run `npm install`.

2. Edit the `connectors.js` with the information of the providers you want to support (read the web3-react documentation).

3. Create a `Web3Provider` in the root of your `App.js`.

```javascript
<Web3Provider connectors={connectors} libraryName={"web3.js"} web3Api={web3}>
  <h1>Hello World</h1>
</Web3Provider>
```

4. Add the `ConnectWallet` component where you need to login a user:

```javascript
<Web3Provider connectors={connectors} libraryName={"web3.js"} web3Api={web3}>
  <ConnectWallet />
</Web3Provider>
```

5. Edit the `ConnectWallet.js` to reflect your won dApp once logged in.
