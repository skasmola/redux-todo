import React from 'react'
import { StatusFilters } from '../filters/filterSlice'
import { availableColors, capitalize } from '../filters/colors'

const RemainingTodos = ({ count }) => {

    const suffix = count == 1 ? '' : 's'

    return (
        <div className='remaining-todos'>
            <h5>Remaining Todos</h5>
            <strong>{count}</strong> item{suffix} left
        </div>
    )
}

const StatusFilter = ({ value: status, onChange }) => {
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
        const value = StatusFilters[key]
        const handleClick = () => onChange(value)
        const className = value === status ? 'selected' : ''

        return (
            <li key={value}>
                <button className={className} onClick={handleClick}>{key}</button>
            </li>
        )
    })

    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>{renderedFilters}</ul>
        </div>
    )
}

const ColorFilter = ({ value: colors, onChange }) => {
    const renderedColors = availableColors.map((color) => {
        const checked = colors.includes(color)
        const handleChange = () => {
            const changeType = checked ? 'removed' : 'added'
            onChange(color, changeType)
        }
        return (
            <label key={color}>
                <input type='checkbox' checked={checked} name={color} onChange={handleChange}/>
                <span className="color-block" style={{ backgroundColor: color }}></span>
                {capitalize(color)}
            </label>
        )
    })

    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">{renderedColors}</form>
        </div>
    )
}

const Footer = () => {
  
  const colors = []
  const todosRemaining = 1
  const status = StatusFilters.All

  const onColorChange = (color, changeType) => {
    console.log("Color Change: ", color)
  }

  const onStatusChange = (status) => console.log("Status Change: ", status) 

  return (
    <footer className="footer">
        <div className="actions">
            <h5>Actions</h5>
            <button className="button">Mark all completed</button>
            <button className="button">Clear Completed</button>
        </div>

        <RemainingTodos count={todosRemaining} />
        <StatusFilter value={status} onChange={onStatusChange}/>
        <ColorFilter value={colors} onChange={onColorChange}/>
    </footer>
  )
}

export default Footer
