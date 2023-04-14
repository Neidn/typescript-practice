import {TodoItemProps} from "../models/todo";

const TodoItem = ({todo}: TodoItemProps) => {
  return (
    <li key={todo.id}>{todo.text}</li>
  );
}

export default TodoItem;
