Retrieves all registered aliases along with associated information.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "get_all_alias_details",
  "params": {
  }
}
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "aliases": [{
      "address": "inf1efVVkmSh4DZZQu6cn2AwLvK9REReqfHaWJx96WHRHrf3d8bfMiHR36DbhpWiUpJyHtEMs7WnNWoLTrw4QUgr5hBGBG4Msg",
      "alias": "tonyxj",
      "comment": "",
      "tracking_key": ""
    },{
      "address": "inf1E5Zy9rZMo1nPBnbFqd14Vg2PS6M3Z3HKtpQJ8ezVSetgRmW35r58jATmGf1kMngyaegpzB8QBWHgsCuUjwJG6zH8A9ZQHb",
      "alias": "trbaglioni",
      "comment": "baglioni.dk",
      "tracking_key": ""
    }],
    "status": "OK"
  }
}
```
### Response description: 
```
    "aliases": List of alias_rpc_details objects, each containing information about an individual alias.
      "address": Address of the alias.
      "alias": Alias itself, a brief shortcut for an address.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
      "address": Address of the alias.
      "alias": Alias itself, a brief shortcut for an address.
      "comment": Arbitrary comment (optional).
      "tracking_key": View secret key of the corresponding address (optional).
    "status": Status of the call.

```