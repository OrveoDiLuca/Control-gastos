import { useMemo } from "react"
import { SwipeableList, SwipeableListItem, SwipeAction, TrailingActions, LeadingActions } from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"
import type { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"
import { categories } from "../data/categories"

type ExpenseDetailProps = {
    expense: Expense
}

function ExpenseDetail({expense}: ExpenseDetailProps) {

    const {dispatch} = useBudget()

    const categoryInfo = useMemo(() => 
        categories.filter((cat) => cat.id === expense.category)[0]
    ,[expense])

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => dispatch({type:'edit-expense', payload:{id:expense.id}})}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => dispatch({type:'delete-expense', payload:{id:expense.id}})}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
    
    return (
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={1}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="bg-white shadow-lg p-10 w-full border-gray-500 flex gap-5 items-center">
                    <div>
                        <img src={`/icono_${categoryInfo.icon}.svg`} alt={categoryInfo.name} className="w-20"/>
                    </div>

                    <div className="flex-1 space-y-3">
                        <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                        <p>{expense.expenseName}</p>
                        <p className="text-slate-600 text-sm">
                            {expense.date ? new Date(expense.date.toString()).toLocaleDateString('es-ES', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }) : ''}
                        </p>
                    </div>
                    <AmountDisplay amount={expense.amount}/>
                </div>
                
            </SwipeableListItem>
        </SwipeableList>
        
    )
}

export default ExpenseDetail