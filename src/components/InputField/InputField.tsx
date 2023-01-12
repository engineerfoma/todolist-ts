import React, { useRef } from 'react'
import './InputField.scss'

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FocusEvent<HTMLFormElement>) => void;
}
 
const InputField= ({ todo, setTodo, handleAdd}: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
        handleAdd(e);
        inputRef.current?.blur();
    }

  return (
    <form className="input" onSubmit={handleSubmit}>
        <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={handleChange}
        />
        <button type="submit" className="input__submit">
            Add
        </button>
    </form>
  )
}

export default InputField