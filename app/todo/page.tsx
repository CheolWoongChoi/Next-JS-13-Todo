"use client";

import { TodoState, useTodo } from "@/store/todo";
import { useState } from "react";

export default function TodoPage() {
  const { todos, setTodo } = useTodo();
  const [description, setDescription] = useState("");

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
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
    <main>
      <div>
        <h1>TODOS</h1>
        <input
          style={{ border: "solid 1px #000 " }}
          value={description}
          onChange={handleChangeDescription}
        />
        <button
          style={{
            border: "solid 1px #000",
          }}
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            const { id, description, completed } = todo;

            return (
              <li key={id}>
                <span>
                  <input
                    style={{
                      border: "solid 1px #000",
                    }}
                    // className={completed ? "decoration-emerald-800" : ""}
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleToggleCompleteTodo(id)}
                  />
                </span>
                <span
                  style={{
                    textDecorationLine: completed ? "line-through" : "",
                  }}
                >
                  {description}
                </span>
                <span>
                  <button
                    style={{
                      border: "solid 1px #000",
                    }}
                    onClick={() => handleRemoveTodo(id)}
                  >
                    X
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
