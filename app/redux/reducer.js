import * as actionTypes from '../redux/actionTypes';

const INITIAL_STATE = {
    dishes: [],
    favourites: [],
    isAuth: false,
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_DISHES:
            return {
                ...state,
                dishes: action.payload
            }

        case actionTypes.ADD_TO_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.concat(action.payload)
            }

        case actionTypes.REMOVE_FOVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.IS_AUTH:
            return {
                ...state,
                isAuth: true
            }
        default:
            return state;
    }
}