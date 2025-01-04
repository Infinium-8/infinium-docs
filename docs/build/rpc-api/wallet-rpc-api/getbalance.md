Retrieves current wallet balance: total and unlocked.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getbalance"
}
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "balance": 1000000000,
    "unlocked_balance": 1000000000
  }
}
```

### Response description:
```
    "balance": unsigned integer; total fund, that the wallet has (unlocked and locked coins).
    "unlocked_balance": unsigned integer; unlocked funds.
```