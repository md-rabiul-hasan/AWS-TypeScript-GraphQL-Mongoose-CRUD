import { ITodo } from '../models/Todo.js';
import Todo from '../models/Todo.js';

export const resolvers = {
  Query: {
    todos: async (): Promise<ITodo[]> => {
      try {
        const todos: ITodo[] = await Todo.find();
        return todos;
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    createTodo: async (_: any, args: {title: string, description: string}): Promise<ITodo> => {
      try {
        const { title, description } = args;
        const newTodo: ITodo = new Todo({
          title,
          description
        });
        const savedTodo: ITodo = await newTodo.save();
        return savedTodo;
      } catch (err) {
        throw err;
      }
    }
  }
};
