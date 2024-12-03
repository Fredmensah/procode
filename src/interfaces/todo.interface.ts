// todo.interface.ts
interface Todo {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed";
  date: string;
  createdAt: string;
}

interface TodoState {
  todos: Todo[];
}

export type { Todo, TodoState };
