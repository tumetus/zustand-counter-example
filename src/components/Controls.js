"use client";
import { useCounterStore } from "./Counter";

export default function Controls() {
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const decreaseCount = useCounterStore((state) => state.decreaseCount);
  return (
    <div>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
    </div>
  );
}
