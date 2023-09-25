"use client";

import { TodoState, useTodo } from "@/store/todo";
import { useState } from "react";

export default function TodoPage() {
  const { todos, setTodo } = useTodo();
  const [description, setDescription] = useState("");

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    if (!description) return;

    const copyTodos = [...todos];
    copyTodos.push({
      id: Math.random().toString(36).substring(2, 11),
      description,
      completed: false,
    });

    setTodo(copyTodos);
    setDescription("");
  };

  const handleRemoveTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodo(newTodos);
  };

  const handleToggleCompleteTodo = (id: string) => {
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
        <input
          className="mt-4 p-1 rounded border-solid border-2 border-gray-300 outline-0 focus:border-gray-400 text-gray-400"
          value={description}
          onChange={handleChangeDescription}
          onKeyDown={handleKeyDown}
        />
        <button
          className="mt-4 ml-2 rounded p-1 border-solid border-2 border-gray-400 bg-gray-300 hover:bg-gray-400 text-zinc-50"
          onClick={handleAddTodo}
        >
          ADD
        </button>
      </section>
      <section className="mt-8">
        <ul>
          {todos.map((todo) => {
            const { id, description, completed } = todo;

            return (
              <li key={id} className="mt-2 flex items-center">
                <span>
                  <input
                    className="border-solid border-2 border-gray-400 hover:cursor-pointer"
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleToggleCompleteTodo(id)}
                  />
                </span>
                <span
                  className={
                    completed
                      ? "ml-2 decoration-2 line-through decoration-red-400 text-xl text-gray-400"
                      : "ml-2 text-xl text-gray-400"
                  }
                >
                  {description}
                </span>
                <span>
                  <button
                    className="ml-2 px-2 rounded border-solid border-2 border-gray-400 bg-gray-300 hover:bg-gray-400 text-cyan-50"
                    onClick={() => handleRemoveTodo(id)}
                  >
                    X
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
