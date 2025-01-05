Generate integrated address.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "make_integrated_address",
  "params": {
    "payment_id": "1dfe5a88ff9effb3"
  }
}
```

### Request description: 
```json
    "payment_id": Hex-encoded Payment ID to be associated with the this address. If empty then wallet would generate new payment id using system random library.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "integrated_address": "infityDDBdocuvvSnogCPt5hf8ijjLsHzKgxkkvqRCzEetjkXj3A6fUSxn6gT7PMa3aYoZzQvj6yxMMzFbrvke5ngTo8iRBwA9TG9Jetwga4svH7g",
    "payment_id": "1dfe5a88ff9effb3"
  }
}
```

### Response description:
```
    "integrated_address": Integrated address combining a standard address and payment ID, if applicable.
    "payment_id": Payment ID associated with the this address.
```