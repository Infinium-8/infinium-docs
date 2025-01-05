This call is used to validate seed phrase and to fetch additional information about it.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_seed_phrase_info",
  "params": {
    "seed_password": "010101012",
    "seed_phrase": "girlfriend ... ... ... ... secret"
  }
}
```

### Request description: 
```json
    "seed_password": Password used to encrypt or decrypt the mnemonic seed phrase, if applicable.
    "seed_phrase": Mnemonic seed phrase used for wallet recovery or generation.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "hash_sum_matched": true,
    "require_password": true,
    "syntax_correct": true,
    "tracking": false
  }
}
```

### Response description:
```
    "hash_sum_matched": Indicates whether the hash sum matches.
    "require_password": Indicates whether a password is required.
    "syntax_correct": Indicates whether the syntax is correct.
    "tracking": Indicates whether tracking is enabled.   
```