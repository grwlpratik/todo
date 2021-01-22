import React, {useRef, useState } from 'react';

import {TodoInterface, TodoFormInterface} from './../interfaces'

const TodoForm = (props: TodoFormInterface) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [formState, setFormState] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value)
  }

  const handleInputEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      const newTodo: TodoInterface = {
        id: Math.random().toString(),
        text: formState,
        isCompleted: false
      }
      props.handleTodoCreate(newTodo)

      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder='Enter new todo'
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  )
}

export default TodoForm