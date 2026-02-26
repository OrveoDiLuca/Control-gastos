import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"
import type { Expense } from "../types"

export default function ExpenseList() {
    const { state } = useBudget()

    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])

    return (
        <div className="mt-10">
            {isEmpty ? (
                <p className="text-center text-gray-500 text-2xl font-bold">No hay gastos</p>
            ) : (
                <div className="space-y-5">
                    <p className="text-center text-gray-500 text-2xl font-bold my-5">Lista de gastos</p>
                    {state.expenses.map((expense: Expense) => {
                        return (
                            <ExpenseDetail
                                key={expense.id}
                                expense={expense}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}
