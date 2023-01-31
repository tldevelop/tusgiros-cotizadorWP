import { useEffect, useState } from "react";
import { getCurrencyData } from "../Helpers/getCurrencyData";

export const useCurrencyData = () => {
    const[data,setData] = useState([]);

    useEffect(() => {
        getCurrencyData().then(
            res => setData(res)
        )
    },[])

    return {
        data
    }
}