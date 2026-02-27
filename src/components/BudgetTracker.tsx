import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function BudgetTracker() {

    const { state } = useBudget()

    const presupuesto = state.budget

    const gastado = useMemo(() => (
        state.expenses.reduce((total, expense) => expense.amount + total, 0)
    )
        , [state.expenses])

    const disponible = useMemo(() => (
        Math.max(state.budget - gastado, 0)
    ), [state.expenses])

    const isBudgetOverspend = useMemo(() => gastado > presupuesto, [presupuesto, gastado])

    const percentage = +(gastado / presupuesto * 100).toFixed(2)

    const resetApp = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap 5">
            <div className="flex justify-center">
                <CircularProgressbar
                    value={percentage}
                    maxValue={100}
                    text={`${percentage}% Gastado`}
                    styles={buildStyles({
                        pathColor: percentage === 100 ? '#DC2626' : '#3b82f6',
                        trailColor: '#f5f5f5',
                        textColor: percentage === 100 ? '#DC2626' : '#3b82f6',
                        textSize: 8,
                    })}
                />
            </div>

            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg hover:bg-pink-900 cursor-pointer"
                    onClick={resetApp}
                >
                    Resetear App
                </button>

                <AmountDisplay
                    label="Presupuesto"
                    amount={presupuesto}
                />

                <AmountDisplay
                    label="Disponible"
                    amount={disponible}
                />

                <AmountDisplay
                    label="Gastado"
                    amount={gastado}
                />

                {isBudgetOverspend && (
                    <p className="bg-red-600 text-white font-bold p-2 text-center rounded-lg w-full">
                        ¡Has excedido el presupuesto!
                    </p>
                )}
            </div>
        </div>
    )
}

export default BudgetTracker