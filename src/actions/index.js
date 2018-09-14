import {LOGIN_CHANGED} from './types';
export const loginChanged = (text) => {
    return {
        type: LOGIN_CHANGED,
        payload: text 
    }
}