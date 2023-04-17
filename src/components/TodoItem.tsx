import {TodoItemProps} from "../models/todo";

import classes from './TodoItem.module.css';

const TodoItem = ({todo}: TodoItemProps) => {
  return (
      <li className={classes.item} key={todo.id}>{todo.text}</li>
  );
}

export default TodoItem;
