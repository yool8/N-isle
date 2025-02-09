// reducer.ts

// 상태 타입 정의
export type State = { count: number };
export type Action = { type: "increment" } | { type: "decrement" };

// 리듀서 함수
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
