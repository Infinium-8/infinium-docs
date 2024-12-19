Retrieves the current core transaction expiration median.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_current_core_tx_expiration_median",
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
    "expiration_median": 1734537090,
    "status": "OK"
  }
}

```

### Response description: 
```
    "expiration_median": The median timestamp from the last N blocks, used to determine if transactions are expired based on their timestamp.
    "status": Status of the call.
```