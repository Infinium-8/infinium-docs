Obtains wallet's public address.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getaddress",
  "params": {
  }
}
```

### Request description: 
```json

```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "address": "inf1PTnuRykYX59VuSLJcK6LDGisBFA9BjiqWNrxrKPQjK4iWJDzW4D3zCDchjbZhbZfmeaN4G6P24b7s4fg8rKU7TRXEmvXYE"
  }
}
```

### Response description:
```
    "address": string; standard public address of the wallet.
```