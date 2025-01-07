Checks redeemed proposal.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "atomics_check_htlc_redeemed",
    "params": {
        "htlc_tx_id": ""
    }
}
```

### Request parameters: 
```json
    "htlc_tx_id": ID for transaction carrying HTLC.
```

### Response: 
```json
    {
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "last_item_index": 72,
    "pi": {
      "balance": 200000000,
      "curent_height": 1623835,
      "transfer_entries_count": 96,
      "transfers_count": 3,
      "unlocked_balance": 20000000
    },
    "total_transfers": 3,
    "transfers": [
      {
        "amount": 100000000,
        "comment": "",
        "fee": 100000,
        "height": 1131972,
        "is_income": true,
        "is_mining": false,
        "is_mixing": false,
        "is_service": false,
        "payment_id": "",
        "remote_addresses": [
          "inf1PTnuRykYX59VuSLJcK6LDGisBFA9BjiqWNrxrKPQjK4iWJDzW4D3zCDchjbZhbZfmeaN4G6P24b7s4fg8rKU7TRXEmvXYE"
        ],
        "show_sender": false,
        "td": {
          "rcv": [
            100000000
          ]
        },
        "timestamp": 1625569494,
        "transfer_internal_index": 0,
        "tx_blob_size": 1225,
        "tx_hash": "b4f6335a3d476629448aad0cbb5a56cbd36ea60d00dcfdb79b501d3f2d4abede",
        "tx_type": 0,
        "unlock_time": 0
      },
      {
        "amount": 100000000,
        "comment": "",
        "fee": 1000000,
        "height": 1131972,
        "is_income": true,
        "is_mining": false,
        "is_mixing": false,
        "is_service": false,
        "payment_id": "",
        "remote_addresses": [
          "inf1PTnuRykYX59VuSLJcK6LDGisBFA9BjiqWNrxrKPQjK4iWJDzW4D3zCDchjbZhbZfmeaN4G6P24b7s4fg8rKU7TRXEmvXYE"
        ],
        "show_sender": false,
        "td": {
          "rcv": [
            100000000
          ]
        },
        "timestamp": 1625569494,
        "transfer_internal_index": 1,
        "tx_blob_size": 1226,
        "tx_hash": "0a7551887a82f893aedfe72aa32189a84743d0044d47b05a5000a2a08ce791a3",
        "tx_type": 0,
        "unlock_time": 0
      },
      {
        "amount": 0,
        "comment": "",
        "fee": 1000000,
        "height": 155555,
        "is_income": false,
        "is_mining": false,
        "is_mixing": false,
        "is_service": true,
        "payment_id": "",
        "recipients_aliases": [
          "test"
        ],
        "remote_addresses": [
          "inf1PTnuRykYX59VuSLJcK6LDGisBFA9BjiqWNrxrKPQjK4iWJDzW4D3zCDchjbZhbZfmeaN4G6P24b7s4fg8rKU7TRXEmvXYE"
        ],
        "show_sender": false,
        "td": {
          "spn": [
            100000000
          ]
        },
        "timestamp": 1651003337,
        "transfer_internal_index": 72,
        "tx_blob_size": 324,
        "tx_hash": "78695ec5cd55bc507955c53dcca11a08d13d91498d5edfd2b61415783f23c133",
        "tx_type": 5,
        "unlock_time": 0
      }
    ]
  }
}
```

### Response description:
```
    "origin_secrete_as_hex": Revealed origin secret, encoded in HEX. If this field is empty, then HTLC have not been redeemed yet.
    "redeem_tx_id": ID of transaction that redeem HTLC. Likely you won't need this field, put it here just in case.
```