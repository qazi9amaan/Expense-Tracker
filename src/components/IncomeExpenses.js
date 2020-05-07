import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext)
    const incomes = transactions.map((transaction) => transaction.amount > 0);
    const total_income = incomes.reduce((acc,item)=>(acc+= item),0).toFixed(2)
    return (
        <div class="inc-exp-container">
                <div>
                <h4>Income</h4>
                <p  className="money plus">+${total_income}</p>
                </div>
                <div>
                <h4>Expense</h4>
                <p  className="money minus">-$0.00</p>
                </div>
      </div>
    )
}
