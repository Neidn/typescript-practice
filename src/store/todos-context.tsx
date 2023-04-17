import {createContext, PropsWithChildren, useState} from 'react';

import {Todo, TodosContextObj} from "../models/todo";

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  onAddTodo: () => {
  },
  onRemoveTodo: (id: string) => {
  },
});

const TodosContextProvider = (props: PropsWithChildren) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    onAddTodo: addTodoHandler,
    onRemoveTodo: removeTodoHandler,
  }

  return (
      <TodosContext.Provider value={contextValue}>
        {props.children}
      </TodosContext.Provider>
  );
};

export default TodosContextProvider;
