import './App.css';

import {Todo} from "./models/todo";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

const App = () => {
  const todos: Todo[] = [
    {id: 't1', text: 'Finish the course'},
    {id: 't2', text: 'Learn all about the course'},
  ];

  const addTodoHandler = (todoText: string) => {
    console.log(todoText);
  }

  return (
      <>
        <NewTodo onAddTodo={addTodoHandler}/>
        <Todos items={todos}/>
      </>
  );
};

export default App;
