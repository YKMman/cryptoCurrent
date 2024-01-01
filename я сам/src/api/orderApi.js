import axios from "axios"

export const orderApi = async (symbol) => {

    const request = await axios.get(`https://api.binance.com/api/v3/depth?limit=15&symbol=${symbol.toUpperCase()}`)

    return request
}