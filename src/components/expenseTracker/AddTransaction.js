import React, {useState} from 'react'
import {addTransaction} from '../expenseTrackerRedux/actions/ExpActIndex'
import {connect} from 'react-redux';

function AddTransaction({addTransaction}) {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text, 
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <div>
                <h3>Add new transaction</h3>
                <form onSubmit = {onSubmit}>
                    <div className="form-control">
                    <label htmlFor="text"><h3>Text</h3></label>
                        <input 
                            type="text" 
                            value={text} onChange={(e)=> setText(e.target.value)}
                            placeholder="Enter text..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount"
                        ><h3>Amount<br />
                        (negative - expense, positive - budget)</h3></label>
                        <input type="number" 
                        value={amount} onChange={(e)=> setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </div>
        </>
    )
}


 export default connect(null, {addTransaction})(AddTransaction)