import React from 'react'
import Transaction from './Transaction'
import {deleteTransaction} from '../expenseTrackerRedux/actions/ExpActIndex'
import {connect} from 'react-redux';


function TransactionList({transactions}) {
    return (
        <div>
            <h2>History</h2>
            <ul className="list">
                {transactions.map(transaction => 
                    (<Transaction key = {transaction.id} 
                    transaction ={transaction} 
                    deleteTransaction={deleteTransaction}/> 
                    ))}
            </ul>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        transactions: state.expReducer.transactions
    }
}


export default connect(mapStateToProps, {deleteTransaction})(TransactionList);
