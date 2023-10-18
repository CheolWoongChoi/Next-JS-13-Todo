import { Todo } from "@/interfaces/todo";
import { create } from "zustand";

interface TodoListState {
  todos: Todo[];
  setTodo: (newTodos: Todo[]) => void;
}

export const useTodo = create<TodoListState>((set) => ({
  todos: [],
  setTodo: (newTodos) => set({ todos: newTodos }),
}));
