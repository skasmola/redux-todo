import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const todos = []

  const listItems = todos.map((todo) => {
    return <TodoListItem key={todo.id} todo={todo} />
  })

  return <ul className="todo-list">{listItems}</ul>
}

export default TodoList
