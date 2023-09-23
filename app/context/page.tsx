"use client";

import React, { createContext, useContext } from "react";

import { GrandPaProvider, GrandPaContext } from "@/context/GrandPaContext";

export default function ContextPage() {
  return (
    <GrandPaProvider>
      <GrandParent />
    </GrandPaProvider>
  );
}

function GrandParent() {
  const { talk } = useContext(GrandPaContext);

  return (
    <>
      <div>GrandPa : {talk}</div>
      <Parent />
    </>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  const { talk, setTalk } = useContext(GrandPaContext);

  return (
    <>
      <div>Child listens {talk}</div>
      <div onClick={setTalk}>setTalk</div>
    </>
  );
}
