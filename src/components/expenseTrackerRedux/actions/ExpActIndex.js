//actions
import {DELETE_TRANSACTION} from '../constants/ExpConstIndex'
import {ADD_TRANSACTION} from '../constants/ExpConstIndex'

export const deleteTransaction = (id) => dispatch => {
    dispatch({type: DELETE_TRANSACTION,
                payload: id
            });

}

export const addTransaction = (transaction) => dispatch => {
    dispatch({type: ADD_TRANSACTION, 
                payload: transaction
            })
}
