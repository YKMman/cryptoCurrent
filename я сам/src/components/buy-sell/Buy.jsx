import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { exchangeApi } from "../../api/exchangeApi"

// eslint-disable-next-line react/prop-types
export const Buy = ({coinActive, value}) => {
    const { register, handleSubmit, watch, setValue  } = useForm()
    

    const amount = watch('amount')

    const onSubmit = (data) => {

        exchangeApi(data, 'buy')
        .then((response) => console.log(response))
        .catch((error) => console.error(error))
    }


    useEffect(() => {
        if (amount > 0) {
            let different = 0


            // eslint-disable-next-line react/prop-types
            value.forEach((el) => {
                if (el.symbol.toLowerCase() === coinActive){
                    // console.log(el.symbol)
                    different = Number(el.askPrice).toFixed(3)
                }
            })

            setValue("receive_name", amount * different)
        }
    }, [amount, setValue])

    // amount * value



    return (
        <div className="flex flex-col p-[10px] flex-auto gap-[15px] sm:w-full rounded-[8px] bg-[#0b1917]">
            <h2 className="text-white flex items-center gap-[5px] text-[16px]">Buy 
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
                    <input {...register("receive_name")} placeholder="0" className="text-text placeholder:text-text bg-[#06100f] rounded-[8px] px-[10px] py-[5px]"
                    />
                </label>
                <input type='submit' value='Buy' className="py-[5px] px-[15px] w-full bg-btnTrading rounded-[8px] cursor-pointer hover:text-black"/>
            </form>
        </div>
    )
}


