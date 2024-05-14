const intialState = {
    status: 'All',
    colors: []
}

export default function filtersReducer(state = intialState, action){
    switch(action.type){
        case "filters/statusFilterChanged" : {
            return {
               ...state,
               status: action.payload
            }
        }
        default:
            return state
    }
}