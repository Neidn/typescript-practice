import {TodoItemProps} from "../models/todo";

import classes from './TodoItem.module.css';

const TodoItem = ({todo, onRemoveTodo}: TodoItemProps) => {
  return (
      <li className={classes.item}
          onClick={onRemoveTodo.bind(null, todo.id)}
          key={todo.id}>{todo.text}</li>
  );
}

export default TodoItem;
