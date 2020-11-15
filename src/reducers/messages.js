import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/types'

const initialState = {}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case SET_MESSAGE:
            return { message: payload } // ? I guess it will save state in redux
        case CLEAR_MESSAGE:
            return { message: '' }
        default:
            return state
    }
}