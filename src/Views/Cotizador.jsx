import FormCotizador from "../Components/Forms/FormCotizador"
import { useCurrencyData } from "../Hooks/useCurrencyData"

const Cotizador = () => {
    const {data} = useCurrencyData();

    console.log(data)

    return (
        <div>
            <FormCotizador/>
        </div>
    )
}

export default Cotizador