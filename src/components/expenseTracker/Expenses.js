import React from 'react'
import {connect} from 'react-redux';

function Expenses({transactions}) {
    // const {transactions} = props;

    const amounts = transactions.map(transaction => transaction.amount);

    const budget = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);

    return (
        <div>
            <div className="inc-exp-container">
        <div>
          <h4>Budget</h4>
          <p className="money plus">{budget}</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        transactions: state.expReducer.transactions
    }
}


export default connect(mapStateToProps, {})(Expenses);