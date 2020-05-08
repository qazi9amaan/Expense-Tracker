import React , {createContext ,  useReducer} from 'react';
import AppReducer from './AppReducer'
// Initial State
const InitialState ={
    transactions : [
       
    ]

}

// Create Context
export const GlobalContext = createContext(InitialState);

// Provide component

export const GlobalProvider = ({ children }) =>
{
    const [state, dispatch] = useReducer(AppReducer, InitialState);
    function deleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        })
    }

    return(<GlobalContext.Provider value ={{
        transactions : state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}