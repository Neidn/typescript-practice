import TodoItem from "./TodoItem";

import {Todo, TodoList} from "../models/todo";

import classes from './Todos.module.css';

const Todos = (props: TodoList) => {
  return (
      <ul className={classes.todos}>
        {props.items.map((item: Todo) => (
            <TodoItem todo={item}/>
        ))}
      </ul>
  );
}

export default Todos;
