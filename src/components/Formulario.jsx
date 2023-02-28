import { Fragment } from 'react'
import { MARCAS, PLANES, YEARS } from '../constants'
import useCotizador from '../hooks/useCotizador.jsx'

const Formulario = () => {
    const { datos, handleChange } = useCotizador()

    return (
        <>
            <form>
                <div className="my-5">
                    <label
                        htmlFor=""
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >
                        Marca
                    </label>
                    <select
                        name="marca"
                        id=""
                        className="w-full p-3 bg-white border border-gray-200 text-center"
                        value={datos.marca}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="">-- Selecciona una marca --</option>
                        {MARCAS.map((marca) => (
                            <option key={marca.id} value={marca.id}>
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label
                        htmlFor=""
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >
                        Año
                    </label>
                    <select
                        name="year"
                        id=""
                        className="w-full p-3 bg-white border border-gray-200 text-center"
                        onChange={(e) => handleChange(e)}
                        value={datos.year}
                    >
                        <option value="">-- Selecciona año --</option>
                        {YEARS.map((year) => (
                            <option key={year} value={year.id}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label
                        htmlFor=""
                        className="block mb-3 font-bold text-gray-400 uppercase"
                    >
                        Elige un plan
                    </label>
                    <div className="flex items-center gap-3">
                        {PLANES.map((plan) => (
                            <Fragment key={plan.id}>
                                <label htmlFor="">{plan.nombre}</label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={(e) => handleChange(e)}
                                />
                            </Fragment>
                        ))}
                    </div>

                    <input
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors
                               text-white cursor-pointer p-3 uppercase font-bold"
                        value="Cotizar"
                    />
                </div>
            </form>
        </>
    )
}

export default Formulario
