import axios from "axios"

export const withdrawApi = async (data) => {
    const request = await axios.post('http://localhost:8081/user/withdrawal', {
        // "BTC":
        // {
        //     "public_key":string
        //     "value":double
        // }
        // "ETH":
        // {
        //     "public_key":string
        //     "value":double
        // }
        // "USDT":
        // {
        //     "public_key":string
        //     "value":double      
        // }
    })

    return request
}