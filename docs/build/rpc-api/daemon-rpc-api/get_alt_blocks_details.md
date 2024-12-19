Retrieves details of alternative blocks in the blockchain, allowing for pagination through large datasets.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_alt_blocks_details",
  "params": {
      "count": 1,
      "offset": 0
  }
}
```
### Request description: 
```
    "count": The number of alternative blocks to retrieve from the specified offset.
    "offset": The offset in the list of alternative blocks from which to start retrieval.
```

### Response: 
```json
 {
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "blocks": [{
      "actual_timestamp": 1734503619,
      "already_generated_coins": "0",
      "base_reward": 100000000,
      "blob": "",
      "block_cumulative_size": 0,
      "block_tself_size": 0,
      "cumulative_diff_adjusted": "7158102001425164",
      "cumulative_diff_precise": "18438740857153488594594",
      "difficulty": "196376464048649619",
      "effective_fee_median": 0,
      "height": 450872,
      "id": "5405ec1706c11bdebe186776cecdef329e0b195c2abecdb3b5c51a77d1741975",
      "is_orphan": true,
      "miner_text_info": "Infinium Holding",
      "object_in_json": "{\n  \"major_version\": 2, \n  \"nonce\": 0, \n  \"prev_id\": \"71093423ddbcb7a16a85828da1ef231614e32143483498574e9a730a187d38c1\", \n  \"minor_version\": 0, \n  \"timestamp\": 1734502320, \n  \"flags\": 1, \n  \"miner_tx\": {\n    \"version\": 1, \n    \"vin\": [ {\n        \"gen\": {\n          \"height\": 450872\n        }\n      }, {\n        \"key\": {\n          \"amount\": 100000000000000, \n          \"key_offsets\": [ {\n              \"uint64_t\": 63147\n            }\n          ], \n          \"k_image\": \"fa5a96f9fca5c2396cfc0fbc6a6697c342d823017e011d16a0841d26cf5f11b6\", \n          \"etc_details\": [ ]\n        }\n      }], \n    \"vout\": [ {\n        \"amount\": 100000000, \n        \"target\": {\n          \"key\": \"36cea99ce7704f293eb729b5de1eaa41b7f1f5fc8c6b3dd2845092d20e13b61600\"\n        }\n      }, {\n        \"amount\": 100000000000000, \n        \"target\": {\n          \"key\": \"50d4d121052b81a938e88c3410775b4fe3e4ca827bfdc723dbcfe6e488e8e45200\"\n        }\n      }\n    ], \n    \"extra\": [ {\n        \"pub_key\": \"ce4a105494e11b62615d08b97d9032cd284f5471aa3dd9c780b667cf84e49389\"\n      }, {\n        \"user_data\": , \n        \"buff\": 16\"496e66696e69756d20486f6c64696e67\"\n      }, {\n        \"extra_padding\": , \n        \"buff\": [ ]\n      }, {\n        \"derivation_hint\": , \n        \"msg\": 2\"6242\"\n      }, {\n        \"unlock_time\": , \n        \"v\": 450882\n      }, {\n        \"attachment\": , \n        \"service_id\": 1\"64\", \n        \"instruction\": 0\"\", \n        \"body\": 8\"c36c626700000000\", \n        \"security\": [ ], \n        \"flags\": 0\n      }], \n    \"signatures\": [ [ \"695a6ef913ce53b942afd39e9a2c0ed2000be099f1f175bdade6763da4535f0393e470734698a7851fe98db8616dcff3ecbab0a1c3676732ef52dbb74760e604\"\n      ]\n    ], \n    \"attachment\": [ ]\n  }, \n  \"tx_hashes\": [ ]\n}",
      "penalty": 0,
      "pow_seed": "",
      "prev_id": "71093423ddbcb7a16a85828da1ef231614e32143483498574e9a730a187d38c1",
      "summary_reward": 100000000,
      "this_block_fee_median": 0,
      "timestamp": 1734502320,
      "total_fee": 0,
      "total_txs_size": 0,
      "transactions_details": [{
        "amount": 100000100000000,
        "blob": "",
        "blob_size": 214,
        "extra": [{
          "datails_view": "",
          "short_view": "ce4a105494e11b62615d08b97d9032cd284f5471aa3dd9c780b667cf84e49389",
          "type": "pub_key"
        },{
          "datails_view": "496e66696e69756d20486f6c64696e67",
          "short_view": "16 bytes",
          "type": "user_data"
        },{
          "datails_view": "",
          "short_view": "0 bytes",
          "type": "extra_padding"
        },{
          "datails_view": "6242",
          "short_view": "2 bytes",
          "type": "derivation_hint"
        },{
          "datails_view": "",
          "short_view": "height: 450882",
          "type": "unlock_time"
        },{
          "datails_view": "BINARY DATA",
          "short_view": "d:",
          "type": "service"
        }],
        "fee": 0,
        "id": "c073f561df191e78146b2adf2914d3f94a5526663cc5ba0602d0181c476e6a7c",
        "ins": [{
          "amount": 0,
          "htlc_origin": "",
          "kimage_or_ms_id": "",
          "multisig_count": 0
        },{
          "amount": 100000000000000,
          "global_indexes": [63147],
          "htlc_origin": "",
          "kimage_or_ms_id": "fa5a96f9fca5c2396cfc0fbc6a6697c342d823017e011d16a0841d26cf5f11b6",
          "multisig_count": 0
        }],
        "keeper_block": 0,
        "object_in_json": "",
        "outs": [{
          "amount": 100000000,
          "global_index": 0,
          "is_spent": false,
          "minimum_sigs": 0,
          "pub_keys": ["36cea99ce7704f293eb729b5de1eaa41b7f1f5fc8c6b3dd2845092d20e13b616"]
        },{
          "amount": 100000000000000,
          "global_index": 0,
          "is_spent": false,
          "minimum_sigs": 0,
          "pub_keys": ["50d4d121052b81a938e88c3410775b4fe3e4ca827bfdc723dbcfe6e488e8e452"]
        }],
        "pub_key": "ce4a105494e11b62615d08b97d9032cd284f5471aa3dd9c780b667cf84e49389",
        "timestamp": 1734503619
      }],
      "type": 0
    }],
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