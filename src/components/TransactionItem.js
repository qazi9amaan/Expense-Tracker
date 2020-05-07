import React from 'react'

export const TransactionItem = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const color = transaction.amount < 0 ? 'minus' : 'plus';
    return (
        <div>
             <li className={color}>
                    {transaction.text} 
                    <span>{sign}${Math.abs(transaction.amount)} </span>
                    <button class="delete-btn">x</button>
                    </li> 
        </div>
    )
}
