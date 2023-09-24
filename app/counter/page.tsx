"use client";

import { Metadata } from "next";

import { home } from "@/store/home";

export default function CounterPage() {
  const { count, name, setCount } = home();

  return (
    <main>
      <div>count : {count}</div>
      <div>name : {name}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </main>
  );
}
