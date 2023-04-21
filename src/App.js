import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Todo from "./components/Todos/Todo";
import TodoForm from "./components/Todos/TodoForm";
import TodosAction from "./components/Todos/TodosAction";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    let newTodo = {
      text: text,
      isComplieted: false,
      id: uuidv4(),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const todoToggleHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplieted: !todo.isComplieted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const clearActionHandler = () => {
    setTodos(
      todos.filter((todo) => {
        return !todo.isComplieted;
      })
    );
  };

  const countTodosComleated = todos.filter((todo) => todo.isComplieted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!todos.length ? (
        ""
      ) : (
        <TodosAction
          resetTodos={resetTodosHandler}
          clearAction={clearActionHandler}
          compleatedTodoExsist = {!!countTodosComleated}
        />
      )}

      <Todo
        deleteTodo={deleteTodoHandler}
        toggleTodo={todoToggleHandler}
        todos={todos}
        countTodosComleated={countTodosComleated}
      />
    </div>
  );
}

export default App;
