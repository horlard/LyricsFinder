export default (state=[],action)=> {
    if(action.type==='DONE') {
        return (
            [...state,action.payload]
        )
    }
    return state;
}