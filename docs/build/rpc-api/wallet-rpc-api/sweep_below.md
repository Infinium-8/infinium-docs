Tries to transfer all coins with amount below the given limit to the given address.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "sweep_below",
  "params": {
    "address": "inftzttEtuBXHaENMCDHA35WjVTSP8QGvYSJ1QcHsFGMQC25PwC827LACMAshFovw9RWQjps4pgR6YVhKksawNscgjGCXKJdvRg5F",
    "amount": 100000000,
    "fee": 1000000,
    "mixin": 1,
    "payment_id_hex": "1dfe5a88ff9effb3"
  }
}
```

### Request description: 
```json
    "address": Public address for sending or receiving native coins.
    "amount": Threshold amount of native coins to sweep.
    "fee": Transaction fee required for processing the transaction.
    "mixin": Number of outputs from the blockchain to mix with when sending a transaction to improve privacy.
    "payment_id_hex": Payment ID associated with the transaction in hexadecimal format.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "amount_swept": 101000000000,
    "amount_total": 100000000000,
    "outs_swept": 112,
    "outs_total": 10,
    "tx_hash": "01220e8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a93",
    "tx_unsigned_hex": "8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a7368304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a9334f158a736"
  }
}
```

### Response description:
```
    "amount_swept": Amount of native coins swept in the transaction.
    "amount_total": Total amount of native coins involved in the transaction.
    "outs_swept": Number of outputs swept in the transaction.
    "outs_total": Total number of outputs in the transaction.
    "tx_hash": Transaction ID (hash) format.
    "tx_unsigned_hex": Unsigned transaction data in hexadecimal format.
```