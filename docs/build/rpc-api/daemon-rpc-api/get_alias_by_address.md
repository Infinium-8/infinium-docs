Retrieves all aliases registered for a given address.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_alias_by_address",
  "params": "inf1dcjP4BZX9SWtg6EjAG9tF55JmQm2yQQm3doMy77v6pe5nc5TG14WMWRhSDBJsugczwLUU5btJZT67ahRygCg7hLCdUwpai"
}
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "alias_info": {
      "address": "inf1dcjP4BZX9SWtg6EjAG9tF55JmQm2yQQm3doMy77v6pe5nc5TG14WMWRhSDBJsugczwLUU5btJZT67ahRygCg7hLCdUwpai",
      "alias": "superblockchain-pool",
      "comment": "Wallet address of the SuperBlockchain Pool administrator.",
      "tracking_key": ""
    },
    "status": "OK"
  }
}
```
### Response description:
```
    "alias_info_list": List of alias_rpc_details objects, each containing detailed information about each alias registered to the specified address.
      "address": Address of the alias.
      "alias": Alias itself, a brief shortcut for an address.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
    "status": Status of the call.
```