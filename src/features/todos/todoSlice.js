const initialState = []

function nextTodo(todos){
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, action){
    switch(action.type){
        //Add a Todo
        case "todos/todoAdded" : {
            return [
                ...state,
                {
                    id: nextTodo(state),
                    text: action.payload,
                    completed: false
                }
            ]
        }
        //Toggle a Todo
        case "todos/todoToggled" : {
            return state.map(todo => {
                if(todo.id === action.payload){
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }
        //Select a color of a todo
        case "todos/colorSelected" : {
            const {todoId, color} = action.payload
            return state.map(todo => {
                if(todo.id !== todoId){
                    return todo
                }

                return {
                    ...todo,
                    color
                }
            })
        }
        case "todos/todoDeleted" : {
            return state.filter((todo) => todo.id !== action.payload)
        }
        case "todos/allCompleted" : {
            return state.map((todo) => {
                return {...todo, completed: true}
            })
        }
        case "todos/completedCleared" : {
            return state.filter((todo) => !todo.completed)
        }
        default:
            return state
    }
}

