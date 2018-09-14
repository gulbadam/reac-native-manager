import {LOGIN_CHANGED} from '../actions/types'
const initialState = {
    value: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_CHANGED:
          console.log(state.value)
    
    
        default:
            return state;
    }
}