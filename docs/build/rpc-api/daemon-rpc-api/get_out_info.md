Returns transaction ID and local output index for a given output amount and its global index.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_out_info",
  "params": {
    "amount": 1000000,
    "i": 0
  }
}
```
### Request description: 
```
    "amount": The specific amount of output to query.
    "i": The global index of the output amount to be queried.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "out_no": 1,
    "status": "OK",
    "tx_id": "712c4dde3e0d59444aad4774eca8faaa6810d7f058a9f762dfb361d2711d6a80"
  }
}
```

### Response description: 
```
    "out_no": Local output index within the transaction.
    "status": Status of the call.
    "tx_id": Transaction ID where the queried output is present, if found.
```