"use client";
import { create } from "zustand";
import Controls from "./Controls";

export const useCounterStore = create((set) => ({
  count: 5,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
}));

export default function Counter() {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <div>
        <h1>Counter</h1>
        <p>The count is: {count}</p>
      </div>
      <Controls />
    </div>
  );
}
