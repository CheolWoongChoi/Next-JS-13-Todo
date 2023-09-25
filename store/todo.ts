import { create } from "zustand";

export interface TodoState {
  id: string;
  description: string;
  completed: boolean;
}

interface TodoListState {
  todos: TodoState[];
  setTodo: (newTodos: TodoState[]) => void;
}

export const useTodo = create<TodoListState>((set) => ({
  todos: [],
  setTodo: (newTodos) => set({ todos: newTodos }),
}));
