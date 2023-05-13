"use client";
import React, { useState } from "react";

export default function RegisterPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>This is client component</h1>
      <div>Hi this is Hello nest by welcome</div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}
