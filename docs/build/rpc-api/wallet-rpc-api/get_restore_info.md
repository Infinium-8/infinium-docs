Return wallet seed, which could be password-protected(seed secured with passphrase) or open(unsecured seed). If no password provided it returns open (unsecured) seed.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_restore_info",
  "params": {
    "seed_password": "010101012"
  }
}
```

### Request description: 
```json
    "seed_password": Password to secure wallet's seed.  
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "seed_phrase": "girlfriend ... ... ... ... secret"
  }
}
```

### Response description:
```
    "seed_phrase": Wallet's seed(secured with password if it was provided in argument).    
```