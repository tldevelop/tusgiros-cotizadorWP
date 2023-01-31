import axios from "axios"

export const getCurrencyData = async () => {
    const url = 'https://new-backend.tusgiros.io/api/monedas/get-rates/';
    const res = await axios.get(url);

    return res
}