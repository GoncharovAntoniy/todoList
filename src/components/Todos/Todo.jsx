import s from "./Todo.module.css";
import TodoList from "./TodoList";

const Todo = ({ todos, deleteTodo, toggleTodo, countTodosComleated }) => {
  return (
    <>
      {todos.length == 0 ? (
        <h2 className={s.h2}>У вас нет текущих задач</h2>
      ) : (
        todos.map((todo) => (
          <TodoList
            key={todo.id}
            toggleTodo={toggleTodo}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
      {!!countTodosComleated && (
        <h3
          className={
            s.todoCount
          }>{`You have compleated ${countTodosComleated} ${
          countTodosComleated > 1 ? "todos" : "todo"
        }`}</h3>
      )}
    </>
  );
};

export default Todo;
