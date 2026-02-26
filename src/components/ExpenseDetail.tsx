import { useMemo } from "react"
import type { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"

type ExpenseDetailProps = {
    expense: Expense
}

function ExpenseDetail({expense}: ExpenseDetailProps) {

    const categoryInfo = useMemo(() => 
        categories.filter((cat) => cat.id === expense.category)[0]
    ,[expense])
    
    return (
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
    )
}

export default ExpenseDetail