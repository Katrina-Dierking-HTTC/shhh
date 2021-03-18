import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../constants/ExpConstIndex';


const initialState = {
    budget: 1200,
    transactions: [
        {id: 1, text: 'take the bus', amount: -75}, 
        {id: 2, text: 'get a tank of gas', amount: -55}, 
        {id: 3, text: 'received a check', amount: 250}, 
        {id: 4, text: 'bought a plane ticket', amount: -375}, 
        {id: 5, text: 'received a gift card', amount: 150} 
    ]
  }

export const expReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default: 
            return state;
    }
}