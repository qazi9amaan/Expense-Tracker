import React from 'react'
import { GlobalContext } from '../context/GlobalState';

export const TransactionItem = ({transaction}) => {
    const {deleteTransaction}  = React.useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+';
    const color = transaction.amount < 0 ? 'minus' : 'plus';
    return (
        <div>
             <li className={color}>
                    {transaction.text} 
                    <span>{sign}${Math.abs(transaction.amount)} </span>
                    <button onClick={()=> deleteTransaction(transaction.id)} class="delete-btn">x</button>
                    </li> 
        </div>
    )
}
