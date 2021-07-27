import * as actionTypes from '../redux/actionTypes';
import axios from 'axios';


export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes
    }
}

export const getDishes = () => dispatch => {

    axios.get("https://myapp-e9aaf-default-rtdb.firebaseio.com/dishes.json")
        .then(response => dispatch(loadDishes(response.data)))
        .catch(err => console.log(err))
}

export const addToFavourite = dish => {
    return {
        type: actionTypes.ADD_TO_FAVOURITE,
        payload: dish
    }
}

export const removeFavourite = dish => {
    return {
        type: actionTypes.REMOVE_FOVOURITE,
        payload: dish
    }
}