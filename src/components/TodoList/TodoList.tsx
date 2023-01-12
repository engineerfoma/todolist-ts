import React from 'react'
import { Todo } from '../../model'
import TodoEl from '../Todo/TodoEl';
import './TodoList.scss'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos">
            {todos.map((t) => (
                <TodoEl
                    todo={t}
                    key={t.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </div>
    )
}

export default TodoList