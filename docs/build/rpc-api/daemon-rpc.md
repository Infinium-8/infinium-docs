---
sidebar_position: 3
---

# Daemon RPC Mode

Infinium command-line daemon application (infiniumd) can be controlled by remote procedure calls (RPC). This makes it possible to use it as a back end for user-defined services.

The daemon starts in RPC server mode by default. To specify the RPC port or bind address the user will need to run infiniumd with the following options:

```shell
infiniumd --rpc-bind-ip RPC_IP --rpc-bind-port RPC_PORT
```

Where:

**RPC_IP**: IP address to bind RPC server to (127.0.0.1 will be used if not specified);  
**RPC_PORT**: TCP port for RPC server (31112 is default);

All examples below are based on the assumption that the daemon is listening for RPC at 127.0.0.1:31112.

All amounts and balances are represented as unsigned integers and measured in atomic units, the smallest fraction of a coin.

One coin is equal to 10^8 atomic units.

## JSON RPC BUSY response

All JSON RPC calls are served via http://RPC_IP:RPC_PORT/json_rpc URI.

Any request may receive a BUSY response if the daemon is synchronizing with the network. In such cases the user should repeat the request later.

```json
{
  "id": "0",
  "jsonrpc": "2.0",
  "result": {
    "status": "BUSY"
  }
}
```

Alternative blocks are not stored between subsequent runs of the daemon application. For a recently started daemon the list of known alternative blocks is always empty.

## Connect Legacy JSON API

This API is legacy and not compliant with the JSON RPC specification. Please note that all methods in this section are accessed by http://RPC_IP:RPC_PORT/METOD_NAME

## Connect Binary RPC API

Binary API uses binary protocol for communication, which is more compact and faster than JSON-API, especially when transferring large amounts of data. It was designed to communicate with a wallet application.  
You may want to use epee serialization, in particular  
**epee::serialization::store_t_to_binary** and **epee::serialization::load_t_from_binary** methods, to serialize your data before passing to API, and to deserialize upon retrieving from API. Alternatively, you may use **epee::net_utils::invoke_http_bin_remote_command2**

All methods in this section are accessible by http://RPC_IP:RPC_PORT/METOD_NAME