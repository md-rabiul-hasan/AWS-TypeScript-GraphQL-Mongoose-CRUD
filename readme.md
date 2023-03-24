# TypeScript GraphQL AWS Serverless

## Payload
```
mutation Mutation($title: String!, $description: String!) {
  createTodo(title: $title, description: $description) {
    title
    description
  }
}
```
## Response
```
{
  "data": {
    "createTodo": {
      "title": "Drb Hasan",
      "description": "Testing"
    }
  }
}
```

## Payload
```
query Query {
  todos {
    title
    description
    id
  }
}
```
## Response
```
{
  "data": {
    "todos": [
      {
        "title": "Hasan Dev",
        "description": "Practice building Serverless yy",
        "id": "641296d1d7a67c74fa5d98cf"
      }
    ]
  }
}
```
