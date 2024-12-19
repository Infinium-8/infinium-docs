Clears transaction pool.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "reset_transaction_pool",
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
    "status": "OK"
  }
}
```

### Response description: 
```
  "status": Status of the call.
```