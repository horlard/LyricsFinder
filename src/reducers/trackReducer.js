export default (state=[],action)=> {
    switch(action.type) {
        case 'DONE' : 
            return [...state,action.payload]
        case 'NOT_DONE' :
            return state;
    }
}