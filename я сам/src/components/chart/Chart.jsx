import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

// eslint-disable-next-line react/prop-types
export const Chart = ({coinActive}) => {
    const chartContainer = useRef();
    const chartRef = useRef();
    const candlestickSeriesRef = useRef();
    



    useEffect(() => {


        const client = new W3CWebSocket(`wss://stream.binance.com:9443/ws/${coinActive}@kline_1m`);

        client.onopen = () => {
        console.log('WebSocket Client Connected');
        };

        client.onmessage = (message) => {
        const data = JSON.parse(message.data);
        // console.log(data)
        const klineData = data.k;

        const candlestickData = {
            time: klineData.t / 1000,
            open: parseFloat(klineData.o),
            high: parseFloat(klineData.h),
            low: parseFloat(klineData.l),
            close: parseFloat(klineData.c),
        };



        candlestickSeriesRef.current.update(candlestickData);

        };

        const getHistoricalData = async () => {
            const endTime = Math.floor(Date.now() / 1000);
            const startTime = endTime - 8.2 * 60 * 60; // 8.2 часов в секундах
        
            // eslint-disable-next-line react/prop-types
            const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${coinActive.toUpperCase()}&interval=1m&startTime=${startTime * 1000}&endTime=${endTime * 1000}`);
            const data = await response.json();
            const candlestickData = data.map((item) => ({
            time: item[0] / 1000,
            open: parseFloat(item[1]),
            high: parseFloat(item[2]),
            low: parseFloat(item[3]),
            close: parseFloat(item[4]),
            }));
        
            candlestickSeriesRef.current.setData(candlestickData);

        };
        if (chartContainer.current && !chartRef.current) {
        chartRef.current = createChart(chartContainer.current, {
            width: chartContainer.current.clientWidth,
            height: 400,
            layout: {
                background: '#0b1917',
                textColor: '#ffffff',
            },
            rightPriceScale: {
            scaleMargins: {
                top: 0.2,
                bottom: 0,
            }
            },
            localization: {
            priceFormatter: (e) =>
                e > 100
                ? parseFloat(e).toFixed(2)
                : e > 1 && e < 100
                ? parseFloat(e).toFixed(4)
                : e <= 1 && e > 0.001
                ? parseFloat(e).toFixed(5)
                : e < 0.001
                ? parseFloat(e).toFixed(8)
                : void 0,
            },
            timeScale: { timeVisible: true, secondVisible: true },
            grid: {
            vertLines: { color: '#1d2127', style: 1 },
            horzLines: { color: '#1d2127', style: 1 },
            },
            crosshair: {
            vertLine: {
                color: "#767f8b",
                width: 0.5,
                style: 1,
                visible: true,
                labelVisible: true,
            },
            horzLine: {
                color: "#767f8b",
                width: 0.5,
                style: 0,
                visible: true,
                labelVisible: true,
            },
            mode: 3,
            },
        });

        candlestickSeriesRef.current = chartRef.current.addCandlestickSeries();

        }
        console.log(chartContainer.current.clientWidth)
        getHistoricalData();
        return () => {

            client.close();
        };
        
    }, [coinActive]);



    return <div className='flex justify-center bg-[#0b1917] p-[5px] w-full flex-auto minxl:w-[650px] minxl:min-w-[650px] rounded-[8px]' ref={chartContainer}/>;
}