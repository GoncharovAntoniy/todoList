import s from "./TodoList.module.css";
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";




const TodoList = ({ todo, deleteTodo, toggleTodo }) => {

  return (
    <>
      <div className={`${s.todolist} ${todo.isComplieted ? s.compleatedTodo : ''}`}>
        <div className={s.item}>
          <RiTodoFill className={s.todoIcon} />
          <p className={s.todolist_text}>{todo.text}</p>
        </div>
        <div className={s.item}>
          <RiDeleteBin2Line className={s.deleteIcon} onClick={() => deleteTodo(todo.id)} />
          <FaCheck onClick={() => toggleTodo(todo.id)} className={s.checkIcon}/>
          
        </div>
      </div>
    </>
  );
};

export default TodoList;
