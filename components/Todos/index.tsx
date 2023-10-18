import { Todo } from "@/interfaces/todo";
import React, { memo } from "react";

type TodosProps = {
  todos: Todo[];
  onToggleTodo: (id: Todo["id"]) => void;
  onRemoveTodo: (id: Todo["id"]) => void;
};

function Todos({ todos, onToggleTodo, onRemoveTodo }: TodosProps) {
  return (
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
                onChange={() => onToggleTodo(id)}
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
                onClick={() => onRemoveTodo(id)}
              >
                X
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(Todos);
