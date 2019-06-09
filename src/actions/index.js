export const Done = (res) => {
    return {
        type : 'DONE',
        payload : res
    }
}

export const notDone = () => {
    return {
        type : 'NOT_DONE'
    }
}