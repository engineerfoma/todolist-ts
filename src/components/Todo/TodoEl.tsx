import React from 'react'
import { Todo } from '../../model'
import { VscEdit } from 'react-icons/vsc'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { IoMdDoneAll } from 'react-icons/io'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoEl = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todo">
      <span className="todo__text">{todo.todo}</span>
      <div className="todo__container">
        <span className="icon"><VscEdit /></span>
        <span className="icon"><RiDeleteBin7Fill /></span>
        <span className="icon"><IoMdDoneAll /></span>
      </div>
    </form>
  )
}

export default TodoEl