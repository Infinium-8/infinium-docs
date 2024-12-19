Retrieves the block header information for a given block hash.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getblockheaderbyhash",
  "params": {
    "hash": "a6b201de3d2c21e17c2cf05dc23e412b4571b0ebcd1261c6c9aa5ffe094ada0f"
  }
}
```
### Request description: 
```
    "hash": The hash of the block for which the header information is being requested.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "depth": 0,
      "difficulty": "186551776722042315",
      "hash": "a6b201de3d2c21e17c2cf05dc23e412b4571b0ebcd1261c6c9aa5ffe094ada0f",
      "height": 451879,
      "major_version": 2,
      "minor_version": 0,
      "nonce": 0,
      "orphan_status": false,
      "prev_hash": "2af423f846a5d3bed1f0f56097982cbb5df86b5e858e5a98a1541d40698dce62",
      "reward": 100000100000000,
      "timestamp": 1734563310
    },
    "status": "OK"
  }
}
```

### Response description: 
```
    "block_header": Detailed header information of the block.
      "depth": Depth of the block in the blockchain. Depth 0 indicates the most recent block.
      "difficulty": Network difficulty target that the block met.
      "hash": Hash of the block.
      "height": Height of the block in the blockchain.
      "major_version": Major version of the block.
      "minor_version": Minor version of the block.
      "nonce": Nonce used for generating the block to meet the network difficulty.
      "orphan_status": Indicates if the block is an orphan (true) or a normal block (false).
      "prev_hash": Hash of the previous block in the chain.
      "reward": Total mining reward of the block including transaction fees (if applicable).
      "timestamp": Timestamp of the block creation.
    "status": Status of the call.
```