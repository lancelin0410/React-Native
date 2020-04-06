export const CHANGE_PROFILE = 'CHANGE_PROFILE'
export const ADD_LIST = 'ADD_LIST'

export function changeProfile(newName, newIsBoy) {
    return {
        type: CHANGE_PROFILE,
        payload: {newName: newName, newIsBoy: newIsBoy}
    }
}

export function addList(noteList) {
    return {
        type: ADD_LIST,
        payload: {noteList: noteList}
    }
}