Saves wallet update progress into a wallet file. Although progress is always saved upon graceful wallet application termination, with this call a user can manually trigger saving process. Otherwise, in a case of abnormal wallet application termination the progress won’t be saved and it will take some time to synchronize on the next launch.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "store",
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
    "wallet_file_size": 232243
  }
}
```

### Response description:
```
    "wallet_file_size": Resulting file size in bytes.
```