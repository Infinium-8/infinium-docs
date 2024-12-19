Obtain basic information about the transaction pool.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_pool_info",
  "params": {
  }
}
```
### Request description: 
```

```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "aliases_que": [{
      "address": "inf1dcjP4BZX9SWtg6EjAG9tF55JmQm2yQQm3doMy77v6pe5nc5TG14WMWRhSDBJsugczwLUU5btJZT67ahRygCg7hLCdUwpai",
      "alias": "superblockchain-pool",
      "comment": "Wallet address of the SuperBlockchain Pool administrator",
      "tracking_key": "18bb94f69ed61b47b6556f3857616c6c65742061646472657373206f66207468652053757065"
    }],
    "error_code": "",
    "status": "OK"
  }
}
```

### Response description: 
```
    "aliases_que": List of aliases from txs that are currently in the tx pool.
      "address": Address of the alias.
      "alias": Alias itself, a brief shortcut for an address.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
    "error_code": Error code, if there's any error (optional).
    "status": Status code, OK if succeeded.
```