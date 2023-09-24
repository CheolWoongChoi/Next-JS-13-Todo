import { create } from "zustand";

export interface TodoState {
  id: string;
  description: string;
  completed: boolean;
}

interface TodoListState {
  todos: TodoState[];
  setTodo: (newTodos: TodoState[]) => void;
  // addTodo: (description: string) => void;
}

export const useTodo = create<TodoListState>((set) => ({
  todos: [],
  setTodo: (newTodos) => set({ todos: newTodos }),
  // addTodo: (description) => {
  //   set((prevState) => ({
  //     todos: [
  //       ...prevState.todos,
  //       {
  //         id: Math.random().toString(36).substring(2, 11),
  //         description,
  //         completed: false,
  //       },
  //     ],
  //   }));
  // },
}));
