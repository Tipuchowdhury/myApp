import * as actionTypes from '../redux/actionTypes';
import axios from 'axios';
import { navigate } from '../../app/NavigationRoot';


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

export const auth_Check = () => {
    return {
        type: actionTypes.IS_AUTH
    }
}

export const tryAuth = (email, password, mode) => dispatch => {

    const API_KEY = "AIzaSyAfzNONHtofRHegGA_Qlx6-3gDKRDwZFhk";
    let URI = "";
    if (mode == "signup") {
        URI = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
    }
    else if (mode == "login") {
        URI = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;
    }

    fetch(URI, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log(err);
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            } else {
                dispatch(auth_Check());
                navigate("Home");
            }
        })
}