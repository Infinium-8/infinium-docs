Returns wallet helpful wallet information.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_wallet_info",
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
    "address": "inftzttEtuBXHaENMCDHA35WjVTSP8QGvYSJ1QcHsFGMQC25PwC827LACMAshFovw9RWQjps4pgR6YVhKksawNscgjGCXKJdvRg5F",
    "current_height": 476249,
    "is_whatch_only": false,
    "path": "\/some\/path\/to\/wallet\/infinium-auditable",
    "transfer_entries_count": 37405,
    "transfers_count": 17876,
    "utxo_distribution": ["0.001:93","0.002:24","0.003:1","0.01:1100","0.02:250","0.03:8","0.09:176","0.9:176","1.0:23","9.0:1","80.0:1","90.0:1","100.0:175","600.0:1","1000.0:1","6000.0:1","10000.0:1"]
  }
}
```

### Response description:
```
    "address": string; standard public address of the wallet.
    "current_height": Current wallet/daemon height.
    "is_whatch_only": Shows if the wallet is watch-only.
    "path": Path to wallet file location.
    "transfer_entries_count": Represent number of internal entries count(each entry represent tx output that have been addressed to this wallet).
    "transfers_count": Represent number of transactions that happened to this wallet(basically tx history).
    "utxo_distribution": UTXO distribution for this particular wallet: disabled right now.
```