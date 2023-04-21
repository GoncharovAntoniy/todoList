import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button'
import s from './TodosAction.module.css'

const TodosAction = ({resetTodos, clearAction, compleatedTodoExsist}) => {
  return (
    <div className={s.Action}>
      <Button title="Reset todos" onClick={resetTodos}><RiRefreshLine /></Button>
      <Button title="Clear compleated todos" onClick={clearAction} disabled={!compleatedTodoExsist} ><RiDeleteBin2Line /></Button>
    </div> 
  );
};

export default TodosAction;