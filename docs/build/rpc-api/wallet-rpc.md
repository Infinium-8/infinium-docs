---
sidebar_position: 5
---

# Wallet RPC Mode

Infinium command-line wallet application (simplewallet) can be run in RPC server mode. In this mode it can be controlled by RPC calls via HTTP. This makes possible to use it as a back end for an arbitrary service.

In order to start the wallet in RPC server mode, a user needs the following:

1. Run infiniumd (the daemon application).

2. Run simplewallet with the following options:

```shell shell
simplewallet --wallet-file PATH_TO_WALLET_FILE --password PASSWORD --rpc-bind-ip RPC_IP --rpc-bind-port RPC_PORT --daemon-address DEAMON_ADDR:DAEMON_PORT
```

**Where:**

- PATH_TO_WALLET_FILE - path to an existing wallet file (should be created beforehand using --generate-new-wallet)
- PASSWORD - wallet’s password
- RPC_IP - IP address to bind RPC server to (127.0.0.1 will be used if not specified)
- RPC_PORT - TCP port for RPC server
- DEAMON_ADDR:DAEMON_PORT - daemon address and port (may be omitted if the daemon is running on the same machine with the default settings)

All examples below are given in assumption that the wallet application is running in RPC server mode and listening at 127.0.0.1:31113.

All amounts and balances are represented as unsigned integers and measured in atomic units, the smallest fraction of a coin.  
1 coin is equal to 10^8 atomic units.