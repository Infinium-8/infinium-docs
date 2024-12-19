Retrieves detailed information about a specific block identified by its hash.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_main_block_details",
  "params": {
    "id": "4b88244b5bc6eae8cce38efdec9cec576d4d6894dbb123f26574c985efc0bb04"
  }
}
```
### Request description: 
```
    "id": The hash ID of the block for which detailed information is being requested.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "block_details": {
      "actual_timestamp": 1734555273,
      "already_generated_coins": "7045179687782190",
      "base_reward": 100000000,
      "blob": "",
      "block_cumulative_size": 1394,
      "block_tself_size": 0,
      "cumulative_diff_adjusted": "7216254998991588",
      "cumulative_diff_precise": "18528430475926984411204",
      "difficulty": "195591252930313344",
      "effective_fee_median": 1000000,
      "height": 451800,
      "id": "4b88244b5bc6eae8cce38efdec9cec576d4d6894dbb123f26574c985efc0bb04",
      "is_orphan": false,
      "miner_text_info": "",
      "object_in_json": "{\n  \"major_version\": 2, \n  \"nonce\": 0, \n  \"prev_id\": \"702ca5a2484b09f18f9e62cbcb4164c2e5c2e45df34abb507f62e2791351365c\", \n  \"minor_version\": 0, \n  \"timestamp\": 1734556260, \n  \"flags\": 1, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 451800\n        }\n      }, {\n        \"key\": {\n          \"amount\": 50000000000000, \n          \"key_offsets\": [ {\n              \"uint64_t\": 23358\n            }\n          ], \n          \"k_image\": \"add2f3aae98747ef1f6249b3daeacab8dc1fb5dc3ed6cb0ed07e9ba0ddd50336\", \n          \"etc_details\": [ ]\n        }\n      }], \n    \"vout\": [ {\n        \"amount\": 1000000, \n        \"target\": {\n          \"key\": \"db5811ce2e2a117cd283a16fb4476ff69f70c31546024caae388c72becf03b2300\"\n        }\n      }, {\n        \"amount\": 100000000, \n        \"target\": {\n          \"key\": \"2437e9113944c66d6561899a534c298e490b63ea62fed4a99faded92134b4c4400\"\n        }\n      }, {\n        \"amount\": 50000000000000, \n        \"target\": {\n          \"key\": \"da685656675b05ec88115e1b7c06c9cd962aa53eeb5217818086cec88dff260400\"\n        }\n      }\n    ], \n    \"extra\": [ {\n        \"pub_key\": \"7d1c4704423c2acf1f50267021d79480d02dc03ce4b0649019140c7e42b99e81\"\n      }, {\n        \"extra_padding\": , \n        \"buff\": [ ]\n      }, {\n        \"derivation_hint\": , \n        \"msg\": 2\"b94c\"\n      }, {\n        \"unlock_time\": , \n        \"v\": 451810\n      }, {\n        \"attachment\": , \n        \"service_id\": 1\"64\", \n        \"instruction\": 0\"\", \n        \"body\": 8\"8936636700000000\", \n        \"security\": [ ], \n        \"flags\": 0\n      }], \n    \"signatures\": [ [ \"e72bfe177d259fe57d068a3f4cfcb5e1652f5f63f485feac901c112945ae3d02e2c0a12f74bdd93b6230a5a133bf1f4f24cef0ba6bf2423a0676d43087bdeb00\"\n      ]\n    ], \n    \"attachment\": [ ]\n  }, \n  \"tx_hashes\": [ \"340fe3ae7c6171c386969087abe3ae36c93033c1c4a456f4685b06689ad5849c\"\n  ]\n}",
      "penalty": 0,
      "pow_seed": "",
      "prev_id": "702ca5a2484b09f18f9e62cbcb4164c2e5c2e45df34abb507f62e2791351365c",
      "summary_reward": 101000000,
      "this_block_fee_median": 1000000,
      "timestamp": 1734556260,
      "total_fee": 1000000,
      "total_txs_size": 1394,
      "transactions_details": [{
        "amount": 50000101000000,
        "blob": "",
        "blob_size": 233,
        "fee": 0,
        "id": "7dae9f258c0b42c8cdf3d1a00be41bbff0a7ffc8f3e28900d03d2534f7284904",
        "keeper_block": 451800,
        "object_in_json": "",
        "pub_key": "7d1c4704423c2acf1f50267021d79480d02dc03ce4b0649019140c7e42b99e81",
        "timestamp": 1734555273
      },{
        "amount": 999000000,
        "blob": "",
        "blob_size": 1394,
        "fee": 1000000,
        "id": "340fe3ae7c6171c386969087abe3ae36c93033c1c4a456f4685b06689ad5849c",
        "keeper_block": 451800,
        "object_in_json": "",
        "pub_key": "ab98e5e642bd3df7549cc42de2273bf3e98e5386e60f36dd3081314f1823339e",
        "timestamp": 1734555273
      }],
      "type": 0
    },
    "status": "OK"
  }
}
```

### Response description: 
```
    "block_details": Detailed information about the block retrieved based on the provided hash ID.
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
        "amount": Total output amount of the transaction.
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