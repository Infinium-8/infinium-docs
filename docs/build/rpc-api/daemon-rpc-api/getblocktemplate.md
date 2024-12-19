Creates a template for the next block.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "getblocktemplate",
  "params": {
    "wallet_address": "inf1PTnuRykYX59VuSLJcK6LDGisBFA9BjiqWNrxrKPQjK4iWJDzW4D3zCDchjbZhbZfmeaN4G6P24b7s4fg8rKU7TRXEmvXYE",
    "extra_text": "",
    "pos_block": false,
    "stakeholder_address": "",
    "pos_amount": 2,
    "pos_index": 1
  }
}
```
### Request description: 
```
  "wallet_address": miner's address for receiving newly generated coins
  "extra_text": additional text included into miner transaction. Cannot exceed 255 bytes.
  "pos_block": specify type of block template to be created: PoS (true) or PoW (false). Default: false.
  "stakeholder_address": specify miner's address to which the stake coins used in PoS block generation will be returned.
  "pos_amount": amount of an output used as a stake.
  "pos_index": global index of an output used as a stake.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "blocktemplate_blob": "0200000000000000002c3978559ba6916285819413aef71e193531d6d711c8247672b49141dad2bfdb008cbd8dbb0600010100b5ca1b0180c2d72f034b57e38f7acd2ffb8d4de43729c792298ce7c95ccdb6a224e516f426dd68722b00041693341e002f59cb65297fd9c3068d028a1fef34198427e87a7734d819bd326d2c15000b0208d40ebfca1b000000",
    "difficulty": "83179997384",
    "height": 451893,
    "prev_hash": "2c3978559ba6916285819413aef71e193531d6d711c8247672b49141dad2bfdb",
    "seed": "3db89d407a5318223df61aeabb86646833530dcccfb8fecb21b4e19d6494d7a0",
    "status": "OK"
  }
}
```

### Response description: 
```
    "blocktemplate_blob": Serialized block template blob.
    "difficulty": The mining difficulty targeted by the block template.
    "height": The height of the block template in the blockchain.
    "prev_hash": Hash of the previous block in the chain.
    "seed": Seed value for the ProgPoWZ mining algorithm's epoch.
    "status": Status of the call.
```