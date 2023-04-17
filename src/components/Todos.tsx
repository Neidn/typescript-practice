import {useContext} from "react";

import classes from './Todos.module.css';

import TodoItem from "./TodoItem";
import {Todo} from "../models/todo";
import {TodosContext} from "../store/todos-context";

const Todos = () => {
  const todosCtx = useContext(TodosContext);

  return (
      <ul className={classes.todos}>
        {todosCtx.items.map((item: Todo) => (
            <TodoItem todo={item} onRemoveTodo={todosCtx.onRemoveTodo.bind(null, item.id)}/>
        ))}
      </ul>
  );
}

export default Todos;
