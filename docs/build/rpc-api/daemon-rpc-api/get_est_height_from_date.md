Give an estimation of block height by the given date.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_est_height_from_date",
  "params": {
    "timestamp": 1734537090
  }
}
```
### Request description: 
```
    "timestamp": Linux timestamp for the required date.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "h": 450037,
    "status": "OK"
  }
}
```

### Response description: 
```
    "h": Estimated height of a block.
    "status": Status of the call.
```