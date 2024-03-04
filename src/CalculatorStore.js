import { create } from "zustand";

function calculate(operator, param1, param2) {
  switch (operator) {
    case "+":
      return param1 + param2;
    case "-":
      return param1 - param2;
    case "*":
      return param1 * param2;
    case "/":
      return param1 / param2;
    default:
      break;
  }
}

export const calculatorStore = create((set) => ({
  param1: 2,
  param2: 1,
  result: 0,
  setParam1: (value) => set({ param1: value }),
  setParam2: (value) => set({ param2: value }),
  calc: (operation) => {
    set((state) => ({
      result: calculate(operation, state.param1, state.param2),
    }));
  },
}));
