import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String!
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(
      title: String!
      description: String!
    ): Todo
  }
`;
