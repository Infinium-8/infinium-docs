Retrieves detailed information about a specific transaction.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_tx_details",
  "params": {
    "tx_hash": "15024dd3f5159f27a3e623c351f589427961d30e686af6bfcb8e33ecc8172936"
  }
}
```
### Request description: 
```
    "tx_hash": The hash of the transaction for which detailed information is being requested.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "tx_info": {
      "amount": 999000000,
      "attachments": [{
        "datails_view": "",
        "short_view": "P:",
        "type": "service"
      }],
      "blob": "",
      "blob_size": 1442,
      "extra": [{
        "datails_view": "",
        "short_view": "(encrypted)",
        "type": "receiver"
      },{
        "datails_view": "",
        "short_view": "4ef1a0a12aac16dfe07448478b74692749fd2ba6164627cd29fb0406b82c29ee",
        "type": "pub_key"
      },{
        "datails_view": "0000",
        "short_view": "0000",
        "type": "FLAGS16"
      },{
        "datails_view": "derivation_hash: 3779a2e7\nencrypted_key_derivation: 3fd2fa3e837aee4dbc0cd977ae7a81bdbd889ba156b1ca2d09b42598d468e653",
        "short_view": "derivation_hash: 3779a2e7",
        "type": "crypto_checksum"
      },{
        "datails_view": "ceb2",
        "short_view": "2 bytes",
        "type": "derivation_hint"
      },{
        "datails_view": ", \n\"sz\": 14, \n\"hsh\": \"c91041bcfb1d2c14da0b68c410228f32058e430aa1f681b7ced6875b26981714\", \n\"cnt\": 1",
        "short_view": "14 bytes",
        "type": "attachment_info"
      }],
      "fee": 1000000,
      "id": "15024dd3f5159f27a3e623c351f589427961d30e686af6bfcb8e33ecc8172936",
      "ins": [{
        "amount": 100000000,
        "global_indexes": [457576],
        "htlc_origin": "",
        "kimage_or_ms_id": "340ae10b72ce074db4d1aadb4b9260940f96adf10cdd3129786e219f325f7a44",
        "multisig_count": 0
      },{
        "amount": 100000000,
        "global_indexes": [457583],
        "htlc_origin": "",
        "kimage_or_ms_id": "eb38cb3db9ddb761c92142196d785e79837e0a8d265742e7baedd5341143a0db",
        "multisig_count": 0
      },{
        "amount": 100000000,
        "global_indexes": [457584],
        "htlc_origin": "",
        "kimage_or_ms_id": "4607316d355c3f2428995e557a538d7c5eceffd0f76713a181238194a3bfba36",
        "multisig_count": 0
      },{
        "amount": 100000000,
        "global_indexes": [457585],
        "htlc_origin": "",
        "kimage_or_ms_id": "d6c6b7e944bdb4b82268632041e869ef29f6bed14a0311c69b7d81cb11245101",
        "multisig_count": 0
      },{
        "amount": 100000000,
        "global_indexes": [457588],
        "htlc_origin": "",
        "kimage_or_ms_id": "251288e1fe92c1b0c03cf2bbcee9506b699a81af6003d4a7af5be5ded9cf2c1a",
        "multisig_count": 0
      },{
        "amount": 100000000,
        "global_indexes": [457589],
        "htlc_origin": "",
        "kimage_or_ms_id": "16b2de49b42ef486a9d2dab3be1559ee72a1ba51f5539dfc5d6ba681f3a5eae2",
        "multisig_count": 0
      },{
        "amount": 100000000,
        "global_indexes": [457592],
        "htlc_origin": "",
        "kimage_or_ms_id": "cf5a49b8681bfb5d68f2f3d88e7ced4aeb06bcf8f647e814137bd1a337b647a4",
        "multisig_count": 0
      },{
        "amount": 100000000,
        "global_indexes": [457594],
        "htlc_origin": "",
        "kimage_or_ms_id": "fb43dd0ba73545241d1403655ea224fdf2605a3904fa81f8e79c618b8cf8879d",
        "multisig_count": 0
      },{
        "amount": 100000000,
        "global_indexes": [457596],
        "htlc_origin": "",
        "kimage_or_ms_id": "9091243ed432d91d3ea9f50a2818acd11510770df0be3e548a826473d371df8b",
        "multisig_count": 0
      },{
        "amount": 100000000,
        "global_indexes": [457597],
        "htlc_origin": "",
        "kimage_or_ms_id": "872f3294dea59387deb26c86869fdd179ed397118fc1b8faf393322805458c44",
        "multisig_count": 0
      }],
      "keeper_block": 451819,
      "object_in_json": "",
      "outs": [{
        "amount": 9000000,
        "global_index": 24212,
        "is_spent": false,
        "minimum_sigs": 0,
        "pub_keys": ["8e83bf4a99b320c8cd5ee23d415d4c063269e739f196242f0ef6a64bbf9b33ff"]
      },{
        "amount": 90000000,
        "global_index": 33317,
        "is_spent": false,
        "minimum_sigs": 0,
        "pub_keys": ["de48d95a30b226028b12ebd35b6102eb36260012ce11bb0dda31c61bce3f19fd"]
      },{
        "amount": 900000000,
        "global_index": 6723,
        "is_spent": false,
        "minimum_sigs": 0,
        "pub_keys": ["f059ce45ace27d323cac1532a8abbac3eb3ed96588e545086ba237308cb6c4ea"]
      }],
      "pub_key": "4ef1a0a12aac16dfe07448478b74692749fd2ba6164627cd29fb0406b82c29ee",
      "timestamp": 1734559279
    }
  }
}

```

### Response description: 
```
    "status": Status of the call.
    "tx_info": Detailed information about the transaction.
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
```