"use client";

import TodosForm from "@/components/TodosForm";
import Todos from "@/components/Todos";
import { useTodo } from "@/store/todo";

export default function TodoPage() {
  const { todos, setTodo } = useTodo();

  const handleSubmitTodo = (description: string) => {
    const newTodos = [
      ...todos,
      {
        id: Math.random().toString(36).substring(2, 11),
        description,
        completed: false,
      },
    ];

    setTodo(newTodos);
  };

  const handleRemoveTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodo(newTodos);
  };

  const handleToggleTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodo(newTodos);
  };

  return (
    <main className="p-4">
      <section>
        <h1 className="text-2xl font-bold">TODOS</h1>
        <TodosForm onSubmitTodo={handleSubmitTodo} />
      </section>
      <section className="mt-8">
        <Todos
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onRemoveTodo={handleRemoveTodo}
        />
      </section>
    </main>
  );
}
