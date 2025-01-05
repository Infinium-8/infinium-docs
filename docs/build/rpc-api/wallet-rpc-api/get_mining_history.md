Returns wallet statistic on mining. As an argument 'v' it receive timestamp from which history is reviewed.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_mining_history",
  "params": {
    "v": 0
  }
}
```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "mined_entries": [{
      "a": 100000000,
      "h": 477321,
      "t": 1736097502
    }]
  }
}
```

### Response description:
```
    "mined_entries": Mined blocks entries.
      "a": Mined amount(block reward).
      "h": Height.
      "t": Timestamp.  
```