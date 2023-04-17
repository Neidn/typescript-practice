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

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
      <>
        <NewTodo onAddTodo={addTodoHandler}/>
        <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
      </>
  );
};

export default App;
