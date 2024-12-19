---
sidebar_position: 1
---

# Overview

Welcome to the Infinium API documentation! As a digital currency enthusiast, developer, or end user, we know how important it is for you to have a clear, comprehensive guide to our API. That's why we've designed our documentation to be as accessible and easy to understand as possible.

Our aim with this documentation is to help you harness the full potential of Infinium's feature-rich platform, allowing you to integrate, innovate, and build on top of Infinium's powerful privacy-oriented blockchain.

:::info
Read more on the [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification)
:::

## Formatting example

Each API endpoint will have an example of the required JSON body to be sent with the POST request, an example response and additional information such as types and additional information regarding the parameters sent and received when necessary.

Additionally, endpoints will be grouped according to whether they call the Daemon or the wallet as well as the scope in which they function such as Marketplace, confidential assets, contracts etc.

### Request

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "getbalance"
}
```

### Response

```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "balance": 500000000,
    "unlocked_balance": 500000000
  }
}
```

---

## Running Daemon and Wallet in RPC mode (brief guide)

:::info
All examples below are based on the assumption that the daemon is listening for RPC at 127.0.0.1:31112
:::

In order to send JSON requests, both the Infinium Daemon and Wallet must be ran in RPC mode

:::tip
For additional info on RPC mode, for wallet visit [Wallet RPC Mode](wallet-rpc), and [Daemon RPC Mode](daemon-rpc)
:::

### How to run Daemon in RPC mode

:::info
In order to interact with the Marketplace API, you must include the following flag: '--enable-offers-service'
:::

```Text console
./infiniumd --rpc-bind-ip 127.0.0.1 --rpc-bind-port 31112 --enable-offers-service
```

### Daemon flags

- rpc-bind-ip — IP address to bind RPC server to (127.0.0.1 will be used if not specified)
- rpc-bind-port — TCP port for RPC server (31112 is default)

---

### How to run Wallet in RPC mode

```Text console
./simplewallet --wallet-file example.wallet --password password --rpc-bind-ip 127.0.0.1 --rpc-bind-port 31113 --daemon-address 127.0.0.1:31112
```

### Simplewallet flags

- wallet-file - name of wallet file to use
- password - wallets password
- rpc-bind-ip - IP for wallet RPC server
- rpc-bind-port - TCP port for wallet RPC server
- daemon-address - IP and PORT of the daemon