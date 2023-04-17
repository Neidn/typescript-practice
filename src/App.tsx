import {useState} from "react";

import './App.css';

import {Todo} from "./models/todo";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.push({id: Math.random().toString(), text: todoText});
      return updatedTodos;
    });
  }

  return (
      <>
        <NewTodo onAddTodo={addTodoHandler}/>
        <Todos items={todos}/>
      </>
  );
};

export default App;
