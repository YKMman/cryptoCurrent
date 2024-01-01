import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { usdtAsyncSlice, usdtStore } from "../../../store/usdt/usdtSlice";

export const ModelMarketTrend = () => {
    const url = 'https://api.binance.com/api/v3/ticker/24hr';
    const arrayCoins = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'LTCUSDT'];

    const dispatch = useDispatch();
    const selector = useSelector(usdtStore);

    useEffect(() => {
        const refreshCoins = () => {
            dispatch(usdtAsyncSlice({ url: url, arrayCoins: arrayCoins }));
        };

        const intervalId = setInterval(refreshCoins, 3000);
    
        // console.log(selector)

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return selector
}

