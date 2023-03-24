"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apollo_server_express_1 = require("apollo-server-express");
const connection_js_1 = __importDefault(require("./database/connection.js"));
const schema_js_1 = require("./graphql/schema.js");
const resolvers_js_1 = require("./graphql/resolvers.js");
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, connection_js_1.default)();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_js_1.typeDefs,
    resolvers: resolvers_js_1.resolvers,
});
const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
};
startServer();
exports.handler = (0, serverless_http_1.default)(app);
