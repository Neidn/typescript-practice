export interface Todo {
  id: string;
  text: string;
}

export interface TodoList {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

export interface TodoItemProps {
  todo: Todo;
  // onToggle: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export interface NewTodoProps {
  onAddTodo: (text: string) => void;
}
