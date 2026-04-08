# Walkthrough - NestJS GraphQL Federation

I have created 3 microservices and 1 gateway as requested.

## Services
1. **Users Service** (`./users`): Port 4001. Manages users.
2. **Products Service** (`./products`): Port 4002. Manages items.
3. **Orders Service** (`./orders`): Port 4003. Links users and products. Extends the `User` type to include orders.
4. **Gateway** (`./gateway`): Port 4000. Composes all subgraphs.

## How to Run
From the root directory, you can start everything at once:
```bash
npm run start:all
```
This will start the subgraphs first, wait for them to be ready, and then start the gateway.

## Testing the Graph
Once running, go to `http://localhost:4000/graphql` and try this query:

```graphql
query {
  orders {
    id
    user {
      username
      email
    }
    products {
      name
      price
    }
  }
}
```

Or query a user with their orders:
```graphql
query {
  user(id: "1") {
    username
    orders {
      id
      products {
        name
      }
    }
  }
}
```

## Structure Details
- **Federation v2**: Used `@Directive('@key(...)')` and `ApolloFederationDriver`.
- **Reference Resolution**: Orders service uses `ResolveField` to return references like `{ __typename: 'User', id: '1' }` which the gateway then resolves via the Users service.
