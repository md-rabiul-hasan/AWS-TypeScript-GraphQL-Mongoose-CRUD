"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
