Searches for a given ID across various entity types such as blocks, transactions, key images, multisig outputs, and alternative blocks, useful when the entity type is unknown or unspecified.

URL: ```http://127.0.0.1:31112/json_rpc```
### Request: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "method": "search_by_id",
  "params": {
    "id": "16602d15c66eee70b5d72d3f0f494f8f47103146bd3318cab2de2337fd8cdd41"
  }
}
```
### Request description: 
```
  "id": The identifier used to search across various types of entities.
```

### Response: 
```json
{
  "id": 0,
  "jsonrpc": "2.0",
  "result": {
    "status": "OK",
    "types_found": ["block"]
  }
}
```

### Response description: 
```
    "status": Status of the call.
    "types_found": List of entity types where the identifier was found.
```