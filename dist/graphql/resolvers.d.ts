import { ITodo } from '../models/Todo.js';
export declare const resolvers: {
    Query: {
        todos: () => Promise<ITodo[]>;
    };
    Mutation: {
        createTodo: (_: any, args: {
            title: string;
            description: string;
        }) => Promise<ITodo>;
    };
};
