import  axios  from "axios"

export const exchangeApi = async (data, decision) => {
    let request = ''
    console.log(data)
    if (decision === 'sell') {
        console.log('sell')
        request = await axios.post('http://localhost:8081/user/exchange', {
            "to_recieve":{
                "value": data.amount,
                "send_name": data.send_name ,
                "receive_name": "USDT" 
            }
        }, {
            method: 'post',
            headers: {
                'Content-Type': 'text/plain',
            },
            withCredentials: true,
        })
    } 

    if (decision === 'buy') {
        console.log('buy')
        request = await axios.post('http://localhost:8081/user/exchange', {
            "to_get": {
                "value": data.amount,
                "send_name": data.send_name ,
                "receive_name": "USDT", 
            }
        }, {
            method: 'post',
            headers: {
                'Content-Type': 'text/plain',
            },
            withCredentials: true,
        })
    }
    console.log(request)
    return request
}


    // amount - количество
    // send_name - монета
    // receive_name - символ который хотим получить? usdt