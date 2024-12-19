Adds new block to the blockchain. Request should contain one string with hex-encoded block blob.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "submitblock",
  "params": {
    "blocks_blob": [
      "0300000000000000008...."
    ]
  }
}
```
### Request description: 
```
  "blocks_blob": array of a single string; block's blob.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK"
  }
}
```

### Response description: 
```
  "status": Status of the call.
```