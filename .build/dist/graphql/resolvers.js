"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Todo_js_1 = __importDefault(require("../models/Todo.js"));
exports.resolvers = {
    Query: {
        todos: async () => {
            try {
                const todos = await Todo_js_1.default.find();
                return todos;
            }
            catch (err) {
                throw err;
            }
        }
    },
    Mutation: {
        createTodo: async (_, args) => {
            try {
                const { title, description } = args;
                const newTodo = new Todo_js_1.default({
                    title,
                    description
                });
                const savedTodo = await newTodo.save();
                return savedTodo;
            }
            catch (err) {
                throw err;
            }
        }
    }
};
