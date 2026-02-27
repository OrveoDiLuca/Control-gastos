import { categories } from "../data/categories"
import { useBudget } from "../hooks/useBudget"

function FilterByCategory() {
    const {dispatch} = useBudget()
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({type:'filter-expenses', payload:{id:e.target.value}})
    }
    return (
        <div className="bg-white shadow-lg rounded-lg p-10">
            <form action="">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <label htmlFor="category">Filtrar gastos</label>
                    <select 
                        name="category" 
                        id="category" 
                        className="rounded-lg border-2 border-slate-100 p-2"
                        onChange={handleChange}
                    >
                        <option value="">Todas las categorías</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FilterByCategory