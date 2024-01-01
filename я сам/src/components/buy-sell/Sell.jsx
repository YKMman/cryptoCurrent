import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { exchangeApi } from "../../api/exchangeApi"

// eslint-disable-next-line react/prop-types
export const Sell = ({coinActive, value}) => {
    const { register, handleSubmit, watch, setValue  } = useForm()
    

    const amount = watch('amount')

    const onSubmit = (data) => {
        exchangeApi(data, 'sell')
        .then((response) => console.log(response))
        .catch((error) => console.error(error))
    }


    useEffect(() => {
        console.log(value)
        if (amount > 0) {
            let different = 0



            // eslint-disable-next-line react/prop-types
            value.forEach((el) => {
                if (el.symbol.toLowerCase() === coinActive){
                    // console.log(el.symbol)
                    different = Number(el.bidPrice).toFixed(3)
                }
            })

            setValue("receive_name", amount * different)
        }
    }, [amount, setValue])

    return (
        <div className="flex flex-col p-[10px] flex-auto gap-[15px] sm:w-full rounded-[8px] bg-[#0b1917]">
            <h2 className="text-white flex items-center gap-[5px] text-[16px]">Sell 
                <span className="uppercase">
                {coinActive}
                </span>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-white gap-[15px]">
                <label className="flex flex-col">
                    <span className="text-text text-[12px]">Amount</span>
                    <input placeholder="0" type='number' {...register("amount")} className="text-text placeholder:text-text bg-[#06100f] rounded-[8px] px-[10px] py-[5px]"/>
                </label>
                <label>
                    <input type='text' value={coinActive} hidden {...register("send_name")}/>
                </label>
                <label className="flex flex-col mb-[15px]">
                    <span className="text-text text-[12px]">Receive</span>
                    <input placeholder="0" {...register("receive_name")} className="text-text placeholder:text-text bg-[#06100f] rounded-[8px] px-[10px] py-[5px]"/>
                </label>
                <input type='submit' value='Sell' className="py-[5px] px-[15px] w-full bg-btnTrading2 rounded-[8px] cursor-pointer hover:text-black"/>
            </form>
        </div>
    )
}


