import axios  from "axios"

export const transferApi = async (data) => {

    

    const request = await axios.post('http://localhost:8081/user/transfer', {
        "target_login": data.login,
        "target_coin": data.coin,
        "transfer_value": data.value
    })
    return request
}

// {
//     "target_login": string
//     "ETH": double
//     "USDT": double
//     "BTC": double
// }