import TodoItem from "./TodoItem";

import {Todo, TodoList} from "../models/todo";

const Todos = (props: TodoList) => {
  return (
      <ul>
        {props.items.map((item: Todo) => (
            <TodoItem todo={item}/>
        ))}
      </ul>
  );
}

export default Todos;
