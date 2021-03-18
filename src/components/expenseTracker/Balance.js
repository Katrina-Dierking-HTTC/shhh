import React from 'react'
import {connect} from 'react-redux';


function Balance ({transactions}) {

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h2>Your Balance</h2> 
            <h1>{total}</h1> 
        </>
    )
}

const mapStateToProps = state => {
    return {
        transactions: state.expReducer.transactions
    }
}


export default connect(mapStateToProps, {})(Balance);