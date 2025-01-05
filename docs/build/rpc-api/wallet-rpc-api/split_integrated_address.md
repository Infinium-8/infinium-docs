Decode integrated address.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "split_integrated_address",
  "params": {
    "integrated_address": "infityDDBdocuvvSnogCPt5hf8ijjLsHzKgxkkvqRCzEetjkXj3A6fUSxn6gT7PMa3aYoZzQvj6yxMMzFbrvke5ngTo8iRBwA9TG9Jetwga4svH7g"
  }
}
```

### Request description: 
```json
    "integrated_address": Integrated address combining a standard address and payment ID, if applicable.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "payment_id": "1dfe5a88ff9effb3",
    "standard_address": "inftzttEtuBXHaENMCDHA35WjVTSP8QGvYSJ1QcHsFGMQC25PwC827LACMAshFovw9RWQjps4pgR6YVhKksawNscgjGCXKJdvRg5F"
  }
}
```

### Response description:
```
    "payment_id": Hex-encoded payment id
    "standard_address": Standart address.
```