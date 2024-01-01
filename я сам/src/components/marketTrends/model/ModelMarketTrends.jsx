import { useSelector } from "react-redux";


import { usdtStore } from "../../../store/usdt/usdtSlice";

export const ModelMarketTrends = () => {
    // const url = 'https://api.binance.com/api/v3/ticker/24hr';
    // const arrayCoins = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'LTCUSDT'];

    // const dispatch = useDispatch();
    const selector = useSelector(usdtStore);

    // useEffect(() => {
    //     const refreshCoins = () => {
    //         dispatch(usdtAsyncSlice({ url: url, arrayCoins: arrayCoins }));
    //     };

    //     const intervalId = setInterval(refreshCoins, 3000);
    
    //     // console.log(selector)

    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, []);

    // return selector

    return selector
}

