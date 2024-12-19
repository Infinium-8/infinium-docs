Returns the block header information of the most recent block.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getlastblockheader",
  "params": [""]
}
```
### Request description: 
```
    
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "block_header": {
      "depth": 0,
      "difficulty": "195989591789146090",
      "hash": "882eefd5d660cfe4a09a3ee3119d1bf2393f2d5a470bb65aa90d080aa952bcf3",
      "height": 452767,
      "major_version": 2,
      "minor_version": 0,
      "nonce": 0,
      "orphan_status": false,
      "prev_hash": "4866fbd01a59f827f14f04a1281725d1d29e8ebc01068ab03ed1f8e96fa1652b",
      "reward": 100000100000000,
      "timestamp": 1734617130
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