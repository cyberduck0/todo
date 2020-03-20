# Gateway

Gateway federating gRPC services.

## Run it

```
yarn install
yarn start
```

## gRPC code generation

`yarn proto` will generate code and types from `../proto` files. 
Always do this when any proto file change and commit the results.

## GQL schema code generation

`yarn schema` will generate code and types from `../schema` files. 
Always do this when any GraphQL schema file change and commit the results.

## TODO

- resolve using the RPC clients