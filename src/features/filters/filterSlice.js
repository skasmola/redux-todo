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
        case "filters/colorFilterChanged" : {
            const {color, changeType} = action.payload
            const { colors } = state
            switch(changeType){
                case "added": {
                   if(colors.includes(color)){
                        return state
                   }
                   return {
                    ...state,
                    colors: state.colors.concat(color)
                   }
                }
                case "removed": {
                    return {
                        ...state,
                        colors: state.colors.filter((prevColor) => prevColor !== color)
                    }
                }
                default:
                    return state
            }
        }
        default:
            return state
    }
}