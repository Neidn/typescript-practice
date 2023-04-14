export interface Todo {
  id: string;
  text: string;
}

export interface TodoList {
  items: Todo[];
}

export interface TodoItemProps {
  todo: Todo;
  // onToggle: (id: string) => void;
  // onRemove: (id: string) => void;
}

export interface NewTodoProps {
  onAddTodo: (text: string) => void;
}
