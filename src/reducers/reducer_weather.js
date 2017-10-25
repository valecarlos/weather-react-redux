import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
    switch (action.type) {
        case FETCH_WEATHER:
            // We should NOT modify our state directly, that why we don´t jus 'push' into the array
            // works the same as state in components, state should not be modified directly
            // just return a new instance of state
            // return state.concat([action.payload.data]) the line below does the same
            return [ action.payload.data, ...state]
    }
    return state
}