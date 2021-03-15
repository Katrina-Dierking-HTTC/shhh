import {
    START_GAME, 
    LOADING, 
    SUBMIT_ANSWER, 
    NEXT_QUESTION, 
    RESET
} from '../constants';

import axios from 'axios';

export const startGame = () => dispatch => {
    dispatch({type: LOADING})
    axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
        .then(res => dispatch({type: START_GAME, 
            payload: res.data.results}))
        .catch(err => console.log(err))
}

export const submitAnswer = (userAnswer) => dispatch => {
    dispatch({type: SUBMIT_ANSWER,
        payload:userAnswer 
    });

    dispatch({type:NEXT_QUESTION});
}


export const reset = () => dispatch => {
    dispatch({type:RESET});
}