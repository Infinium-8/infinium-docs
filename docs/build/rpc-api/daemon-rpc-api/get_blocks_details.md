Retrieves detailed information about a sequence of blocks starting from a specific height.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "get_blocks_details",
    "params": {
        "height_start": 51,
        "count": 1
    }
}
```
### Request description: 
```
    "height_start": The starting block height from which block details are retrieved.
    "count": The number of blocks to retrieve from the starting height.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "blocks": [{
      "actual_timestamp": 1706473658,
      "already_generated_coins": "7000005100000000",
      "base_reward": 100000000,
      "blob": "",
      "block_cumulative_size": 0,
      "block_tself_size": 0,
      "cumulative_diff_adjusted": "10537",
      "cumulative_diff_precise": "30542",
      "difficulty": "1",
      "effective_fee_median": 10000,
      "height": 51,
      "id": "a5eb244840932c74f28576e0840743363ff3ef4c6dedac691d9781fd53e4a868",
      "is_orphan": false,
      "miner_text_info": "",
      "object_in_json": "{\n  \"major_version\": 0, \n  \"nonce\": 5399810502774873341, \n  \"prev_id\": \"ac388c6b86aad204db887dd0f29e3bcab20efbf9b988ba27cfd22094d00efc52\", \n  \"minor_version\": 0, \n  \"timestamp\": 1706473658, \n  \"flags\": 0, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 51\n        }\n      }\n    ], \n    \"vout\": [ {\n        \"amount\": 100000000, \n        \"target\": {\n          \"key\": \"5b29e2c0f6c430b61538d01ee4ac7e8fb8b75002b51d21bb1520932ed11ad2cb00\"\n        }\n      }\n    ], \n    \"extra\": [ {\n        \"pub_key\": \"b8bcf6d71f5865a76733ba57ed55fdc565287e05380691dd4574dc8ade095e91\"\n      }, {\n        \"extra_padding\": , \n        \"buff\": [ ]\n      }, {\n        \"derivation_hint\": , \n        \"msg\": 2\"b3e6\"\n      }, {\n        \"unlock_time\": , \n        \"v\": 61\n      }, {\n        \"string\": 4\"673d7556\"\n      }], \n    \"signatures\": [ ], \n    \"attachment\": [ ]\n  }, \n  \"tx_hashes\": [ ]\n}",
      "penalty": 0,
      "pow_seed": "",
      "prev_id": "ac388c6b86aad204db887dd0f29e3bcab20efbf9b988ba27cfd22094d00efc52",
      "summary_reward": 100000000,
      "this_block_fee_median": 0,
      "timestamp": 1706473658,
      "total_fee": 0,
      "total_txs_size": 0,
      "transactions_details": [{
        "amount": 100000000,
        "blob": "",
        "blob_size": 91,
        "fee": 0,
        "id": "7cfb4e27ea4f6f1c224fa11a8b6d2abd24b27d96d1b7928a73b5d6ac87031554",
        "keeper_block": 51,
        "object_in_json": "",
        "pub_key": "b8bcf6d71f5865a76733ba57ed55fdc565287e05380691dd4574dc8ade095e91",
        "timestamp": 1706473658
      }],
      "type": 1
    }],
    "status": "OK"
  }
}

```

### Response description: 
```
    "blocks": List of blocks with detailed information, starting from the specified height.
      "actual_timestamp": Actual timestamp encoded in the block's extra data for PoS blocks.
      "already_generated_coins": Total amount of coins generated in the blockchain up to this block.
      "base_reward": Base mining reward for the block.
      "blob": Serialized form of the block.
      "block_cumulative_size": Cumulative size of the block including all transactions.
      "cumulative_diff_adjusted": Adjusted cumulative difficulty of the blockchain up to this block.
      "cumulative_diff_precise": Precise cumulative difficulty of the blockchain up to this block.
      "difficulty": Mining difficulty of the block.
      "height": Height of the block in the blockchain.
      "id": Unique identifier of the block.
      "is_orphan": Indicates whether the block is an orphan.
      "miner_text_info": Additional textual information provided by the miner of the block.
      "object_in_json": Serialized representation of the block in JSON format.
      "penalty": Penalty applied to the reward if the block is larger than median but not large enough to be rejected.
      "prev_id": Hash of the previous block in the chain.
      "summary_reward": Total reward for the block, including base reward and transaction fees (legacy).
      "this_block_fee_median": Median transaction fee of the transactions within this block.
      "timestamp": Timestamp when the block was created, in PoS blocks used for mining.
      "total_fee": Total transaction fees included in the block.
      "total_txs_size": Total size of all transactions included in the block.
      "transactions_details": Detailed information about each transaction included in the block.
        "amount": Total output amount of the transaction (legacy, for pre-Zarcanum txs).
        "attachments": Additional attachments to the transaction.
          "details_view": A detailed representation of the extra entry.
          "short_view": A concise representation of the extra entry.
          "type": Type of the extra entry in the transaction.
        "blob": Serialized form of the transaction, encoded in Base64.
        "blob_size": Size of the serialized transaction in bytes.
        "extra": Extra data associated with the transaction.
          "details_view": A detailed representation of the extra entry.
          "short_view": A concise representation of the extra entry.
          "type": Type of the extra entry in the transaction.
        "fee": Transaction fee in the smallest currency unit.
        "id": Hash of the transaction.
        "ins": Inputs of the transaction.
          "amount": The amount of coins being transacted.
          "global_indexes": List of global indexes indicating the outputs referenced by this input, where only one is actually being spent.
          "htlc_origin": Origin hash for HTLC (Hash Time Locked Contract).
          "kimage_or_ms_id": Contains either the key image for the input or the multisig output ID, depending on the input type.
          "multisig_count": Number of multisig signatures used, relevant only for multisig outputs.
        "keeper_block": Block height where the transaction is confirmed, or -1 if it is unconfirmed.
        "object_in_json": Serialized transaction represented in JSON, encoded in Base64.
        "outs": Outputs of the transaction.
          "amount": The output's amount, 0 for ZC outputs.
          "global_index": Global index of the output for this specific amount.
          "is_spent": Indicates whether the output has been spent.
          "minimum_sigs": Minimum number of signatures required to spend the output, for multisig outputs only.
          "pub_keys": List of public keys associated with the output.
        "pub_key": Public key associated with the transaction.
        "timestamp": Timestamp when the transaction was created.
      "type": Type of the block.
    "status": Status of the call.
```