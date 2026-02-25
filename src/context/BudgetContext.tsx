import { createContext, useReducer, type ReactNode, type Dispatch } from "react"
import { budgetReducer, initialState, type BudgetActions, type BudgetState } from "../reducer/budget-reducer"

type BudgetContextProps = {
    state: BudgetState, 
    dispatch: Dispatch<BudgetActions>
}
export const BudgetContext = createContext<BudgetContextProps>(null!) //Nos sirve para generar el BudgetContext.Provider. 

type BudgetProviderProps = {
    children: ReactNode
}

//Creando el provider, este es donde viene los datos y los datos viene del reducer. 
export const BudgetProvider = ({children}: BudgetProviderProps) => {
    const [state,dispatch] = useReducer(budgetReducer, initialState) 

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}