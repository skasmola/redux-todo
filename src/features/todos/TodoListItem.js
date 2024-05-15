import React from 'react'
import { ReactComponent as TimesSolid } from './times-solid.svg'

const TodoListItem = () => {
  return (
    <li>
        <div className="view">
            <div className="segment label">
                <input type='checkbox' className="toggle"/>
            </div>
            <div className="todo-text">Go to Gym</div>
        </div>
        <div className="segment buttons">
            <select className="colorPicker">
                <option value=""></option>
            </select>
            <button className="destroy">
                <TimesSolid />
            </button>
        </div>
    </li>
  )
}

export default TodoListItem
