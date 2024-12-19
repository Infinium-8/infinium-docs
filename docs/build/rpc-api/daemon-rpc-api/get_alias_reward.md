Retrieves the cost of registering an alias on the blockchain.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_alias_reward",
  "params": {
    "alias": "superblockchain-pool"
  }
}
```
### Request description: 
```
    "alias": The alias name for which the registration cost is being queried.

```
### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "reward": 10000000,
    "status": "OK"
  }
}
```
### Response description: 
```
    "reward": The registration cost for the specified alias.
    "status": Status of the call.

```