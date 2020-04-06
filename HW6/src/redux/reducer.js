import { CHANGE_PROFILE, ADD_LIST } from './action'

const initialState = {
    newName: '隨筆',
    newIsBoy: true,
    noteList: []
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case CHANGE_PROFILE:
            return {
                ...state,
                newName: action.payload.newName,
                newIsBoy: action.payload.newIsBoy
            }
        case ADD_LIST:
            let newList = state.noteList
            const length = newList.length
            newList.push({
                id: String(length),
                ...action.payload.noteList
            })
            console.log(newList)
            return {
                ...state,
                noteList: newList
            }
        default:
            return state
    }
}