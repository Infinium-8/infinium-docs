Search for transacrions in the wallet by few parameters.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "search_for_transactions",
  "params": {
    "filter_by_height": true,
    "in": true,
    "max_height": 20000,
    "min_height": 11000,
    "out": true,
    "pool": false,
    "tx_id": "97d91442f8f3c22683585eaa60b53757d49bf046a96269cef45c1bc9ff7300cc"
  }
}
```

### Request description: 
```json
    "filter_by_height": Do filter transactions by height or not.
    "in": Search over incoming transactions.
    "max_height": Maximum height for filtering transactions.
    "min_height": Minimum height for filtering transactions.
    "out": Search over outgoing transactions.
    "pool": Search over pool transactions.
    "tx_id": Transaction ID represented as a hexadecimal string.    
```

### Response: 
```json

```

### Response description:
```
    
```