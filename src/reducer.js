const intialState = {
    todos : [
        {id : 0, text: "Learn React", completed: true},
        {id : 1, text: "Learn Redux with React", completed: false, color: "purple"},
        {id : 2, text: "Build Something with Redux", completed: false, color: "red"},
    ],
    filters : {
        status: 'All',
        colors: []
    }
}

export default function appReducer(state = intialState, action){
    switch (action.type) {
        

        default: 
            return state;
    }
}

