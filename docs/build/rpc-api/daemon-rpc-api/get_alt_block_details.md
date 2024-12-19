Returns block details for a specified identifier. Only for blocks in alternative chains.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_alt_block_details",
  "params": {
    "id": "625b7cd725205daedb617d90ac4f703b461feec7c3c66ff209410e6eb2ea8d2f"
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
      "actual_timestamp": 1734517575,
      "already_generated_coins": "0",
      "base_reward": 100000000,
      "blob": "",
      "block_cumulative_size": 0,
      "block_tself_size": 0,
      "cumulative_diff_adjusted": "7172627441885350",
      "cumulative_diff_precise": "18463622338409670224139",
      "difficulty": "206821607836684472",
      "effective_fee_median": 0,
      "height": 451121,
      "id": "625b7cd725205daedb617d90ac4f703b461feec7c3c66ff209410e6eb2ea8d2f",
      "is_orphan": true,
      "miner_text_info": "Infinium Treasury",
      "object_in_json": "{\n  \"major_version\": 2, \n  \"nonce\": 0, \n  \"prev_id\": \"257e6b5ab3b03f0c96d20e5049f3896eb07cd6a13f123c145ba87c4aca48f666\", \n  \"minor_version\": 0, \n  \"timestamp\": 1734515535, \n  \"flags\": 1, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 451121\n        }\n      }, {\n        \"key\": {\n          \"amount\": 1000000000000, \n          \"key_offsets\": [ {\n              \"uint64_t\": 9406\n            }\n          ], \n          \"k_image\": \"8582a372bec633495041946688f7eb7aaa3a8e96623a8234e9631a873e8900e5\", \n          \"etc_details\": [ ]\n        }\n      }], \n    \"vout\": [ {\n        \"amount\": 100000000, \n        \"target\": {\n          \"key\": \"8974f6938d58acb6e38ab96e4df7377d3e6747b9d2330c778b8178a843ded5c900\"\n        }\n      }, {\n        \"amount\": 1000000000000, \n        \"target\": {\n          \"key\": \"bd7ad50210d7df94aafb4666860690177f956c27e635a8b6c35b7dbb051d6e4500\"\n        }\n      }\n    ], \n    \"extra\": [ {\n        \"pub_key\": \"45e83ab4ca7d94fac4741c94b483ff6fee21c2685e38efd3df61a38a8ed0ce1e\"\n      }, {\n        \"user_data\": , \n        \"buff\": 17\"496e66696e69756d205472656173757279\"\n      }, {\n        \"extra_padding\": , \n        \"buff\": [ ]\n      }, {\n        \"derivation_hint\": , \n        \"msg\": 2\"0481\"\n      }, {\n        \"unlock_time\": , \n        \"v\": 451131\n      }, {\n        \"attachment\": , \n        \"service_id\": 1\"64\", \n        \"instruction\": 0\"\", \n        \"body\": 8\"47a3626700000000\", \n        \"security\": [ ], \n        \"flags\": 0\n      }], \n    \"signatures\": [ [ \"6e58c171b33d5c3952057fb9c9cee973763cd1aff35f3deeb86216546d102106c61b77f7133b41a0c3e912d530b07a851339fcbdd2892fc13c8fb4a50ad4a808\"\n      ]\n    ], \n    \"attachment\": [ ]\n  }, \n  \"tx_hashes\": [ ]\n}",
      "penalty": 0,
      "pow_seed": "",
      "prev_id": "257e6b5ab3b03f0c96d20e5049f3896eb07cd6a13f123c145ba87c4aca48f666",
      "summary_reward": 100000000,
      "this_block_fee_median": 0,
      "timestamp": 1734515535,
      "total_fee": 0,
      "total_txs_size": 0,
      "transactions_details": [{
        "amount": 1000100000000,
        "blob": "",
        "blob_size": 213,
        "extra": [{
          "datails_view": "",
          "short_view": "45e83ab4ca7d94fac4741c94b483ff6fee21c2685e38efd3df61a38a8ed0ce1e",
          "type": "pub_key"
        },{
          "datails_view": "496e66696e69756d205472656173757279",
          "short_view": "17 bytes",
          "type": "user_data"
        },{
          "datails_view": "",
          "short_view": "0 bytes",
          "type": "extra_padding"
        },{
          "datails_view": "0481",
          "short_view": "2 bytes",
          "type": "derivation_hint"
        },{
          "datails_view": "",
          "short_view": "height: 451131",
          "type": "unlock_time"
        },{
          "datails_view": "BINARY DATA",
          "short_view": "d:",
          "type": "service"
        }],
        "fee": 0,
        "id": "9d4433209b550c622cc3432828bbccf857a0537472ff1cb94ef108c6ab7261c0",
        "ins": [{
          "amount": 0,
          "htlc_origin": "",
          "kimage_or_ms_id": "",
          "multisig_count": 0
        },{
          "amount": 1000000000000,
          "global_indexes": [9406],
          "htlc_origin": "",
          "kimage_or_ms_id": "8582a372bec633495041946688f7eb7aaa3a8e96623a8234e9631a873e8900e5",
          "multisig_count": 0
        }],
        "keeper_block": 0,
        "object_in_json": "",
        "outs": [{
          "amount": 100000000,
          "global_index": 0,
          "is_spent": false,
          "minimum_sigs": 0,
          "pub_keys": ["8974f6938d58acb6e38ab96e4df7377d3e6747b9d2330c778b8178a843ded5c9"]
        },{
          "amount": 1000000000000,
          "global_index": 0,
          "is_spent": false,
          "minimum_sigs": 0,
          "pub_keys": ["bd7ad50210d7df94aafb4666860690177f956c27e635a8b6c35b7dbb051d6e45"]
        }],
        "pub_key": "45e83ab4ca7d94fac4741c94b483ff6fee21c2685e38efd3df61a38a8ed0ce1e",
        "timestamp": 1734517575
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