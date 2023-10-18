import React, { useState } from "react";

type TodosFormProps = {
  onSubmitTodo: (description: string) => void;
};

export default function TodosForm({ onSubmitTodo }: TodosFormProps) {
  const [description, setDescription] = useState("");

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description) return;

    setDescription("");
    onSubmitTodo(description);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="mt-4 p-1 rounded border-solid border-2 border-gray-300 outline-0 focus:border-gray-400 text-gray-400"
        value={description}
        onChange={handleChangeDescription}
      />
      <button
        type="submit"
        className="mt-4 ml-2 rounded p-1 border-solid border-2 border-gray-400 bg-gray-300 hover:bg-gray-400 text-zinc-50"
      >
        ADD
      </button>
    </form>
  );
}
