Make new payment transaction from the wallet.

URL: ```http://127.0.0.1:31113/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "transfer",
  "params": {
    "comment": "Thanks for the coffe",
    "destinations": [{
      "address": "inf1PTnuRykYX59VuSLJcK6LDGisBFA9BjiqWNrxrKPQjK4iWJDzW4D3zCDchjbZhbZfmeaN4G6P24b7s4fg8rKU7TRXEmvXYE",
      "amount": 100000000
    }],
    "fee": 1000000,
    "hide_receiver": true,
    "mixin": 15,
    "payment_id": "",
    "push_payer": false,
    "service_entries": [{
      "body": "dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85dcfd7e055a6a3043ea3541a571a57a63e25dcc64e4a270f14fa9a58ac5dbec85",
      "flags": 0,
      "instruction": "K",
      "security": "d8f6e37f28a632c06b0b3466db1b9d2d1b36a580ee35edfd971dc1423bc412a5",
      "service_id": "C"
    }],
    "service_entries_permanent": true
  }
}
```

### Request description: 
```json
    "comment": Text comment that is displayed in UI
    "destinations": List of destinations
      "address": Destination address
      "amount": Amount to transfer to destination
    "fee": Fee to be paid on behalf of sender's wallet(paid in native coins)
    "hide_receiver": This add to transaction information about remote address(destination), might be needed when the wallet restored from seed phrase and fully resynched, if this option were true, then sender won't be able to see remote address for sent transactions anymore.
    "mixin": Specifies number of mixins(decoys) that would be used to create input
    "payment_id": Hex-encoded payment_id, that normally used for user database by exchanges
    "push_payer": Reveal information about sender of this transaction, basically add sender address to transaction in encrypted way, so only receiver can see who sent transaction
    "service_entries": Service entries that might be used by different apps that works on top of Infinium Network, not part of consensus
      "body": Hex-encoded body of the attachment
      "flags": Flags that help wallet to automatically process some properties of the attachment(combination of TX_SERVICE_ATTACHMENT_ENCRYPT_BODY=1, TX_SERVICE_ATTACHMENT_DEFLATE_BODY=2, TX_SERVICE_ATTACHMENT_ENCRYPT_BODY_ISOLATE_AUDITABLE=4,TX_SERVICE_ATTACHMENT_ENCRYPT_ADD_PROOF=8 )
      "instruction": Instruction that make sence for this particular service
      "security": Hex-encoded public key of the owner, optional
      "service_id": Service ID, identificator that diferent one service from another
    "service_entries_permanent": Point to wallet that service_entries should be placed to 'extra' section of transaction(which won't be pruned after checkpoints)
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "tx_hash": "01220e8304d46b940a86e383d55ca5887b34f158a7365bbcdd17c5a305814a93",
    "tx_size": 1234,
    "tx_unsigned_hex": ""
  }
}
```

### Response description:
```
    "tx_hash": Hash of the generated transaction(if succeded).
    "tx_size": Transaction size in bytes.
```