import React from 'react'
import ExpHeader from './ExpHeader'
import Balance from './Balance'
import Expenses from './Expenses'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import './trackerStyle.css'

export default function Tracker () {
    return (
        <div className="tracker-body">
        <ExpHeader />
            <div className="container">
                <Balance />
                <Expenses />
                <TransactionList />
                <AddTransaction />
            </div>

        </div> 
    )
}







