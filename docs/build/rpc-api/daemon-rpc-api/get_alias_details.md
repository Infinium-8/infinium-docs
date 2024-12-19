Retrieves information about a specific address alias.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_alias_details",
  "params": {
    "alias": "superblockchain-pool"
  }
}
```
### Request description: 
```
    "alias": The alias name for which details are being requested.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "alias_details": {
      "address": "inf1dcjP4BZX9SWtg6EjAG9tF55JmQm2yQQm3doMy77v6pe5nc5TG14WMWRhSDBJsugczwLUU5btJZT67ahRygCg7hLCdUwpai",
      "comment": "Wallet address of the SuperBlockchain Pool administrator.",
      "tracking_key": ""
    },
    "status": "OK"
  }
}
```
### Response description: 
```
    "alias_details": Contains the detailed information about the specified alias, including the associated wallet address, tracking key, comment etc..
      "address": Address of the alias.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
    "status": Status of the call.

```