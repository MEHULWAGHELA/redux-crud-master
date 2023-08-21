import { EDIT, GET } from "../type/type"

let defaultState = {
    arr: []
}
export const apiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET: {
            return {
                arr: action.data
            }
        }
        case EDIT: {
            return {
                arr: state.arr,
                obj: action.obj
            }
        }
        default: {
            return defaultState
        }
    }
}