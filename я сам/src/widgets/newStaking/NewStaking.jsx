import { useState } from "react"


const NewStaking = () => {
    const [rangeValue, setRangeValue] = useState(1)
    const [activeWeek, setActiveWeek] = useState(1)

    const handleInput = (e) => {
        e.preventDefault();
        setRangeValue(Number(e.target.value))
    }

    return (
        <section className="">
            <div className="container">
                <div className="relative rounded-[40px] p-[60px] md:p-[20px] bg-newStaking my-[160px] max-w-[850px] mx-auto border-[2px] after:absolute after:left-[50%] after:top-[50%] after:translate-x-[-50%] after:translate-y-[-50%] after:z-[-1] border-tableBorder after:bg-hardShadow after:w-[630px] after:h-[250px] after:rounded-full after:opacity-[0.45]  after:blur-[150px]  z-10
                md:after:w-[340px]
                ">
                    <div className="flex flex-col items-start mb-[60px] md:items-center">
                        <div className="text-white flex flex-col items-center text-center gap-[5px] mb-[40px]">
                            <h4 className="text-[18px]">
                                Deposit amount
                            </h4>
                            <span className="text-[22px]">{rangeValue * 100}$</span>
                        </div>
                        <input type='range' min='1' max='100' value={rangeValue} step='1' onInput={(e) => handleInput(e)} className="w-full"/>
                    </div>
                    <ul className="text-white flex items-center gap-[20px] justify-between mb-[60px] flex-wrap md:justify-center">
                        <li>
                            <button onClick={() => setActiveWeek(1)} className="rounded-[24px] bg-newStaking border-[1px] border-tableText py-[10px] px-[25px] duration-300 hover:bg-hoverMyAltCoins">1 Week</button>
                        </li>
                        <li>
                            <button onClick={() =>setActiveWeek(2)} className="rounded-[24px] bg-newStaking border-[1px] border-tableText py-[10px] px-[25px] duration-300 hover:bg-hoverMyAltCoins">2 Weeks</button>
                        </li>
                        <li>
                            <button onClick={() =>setActiveWeek(3)} className="rounded-[24px] bg-newStaking border-[1px] border-tableText py-[10px] px-[25px] duration-300 hover:bg-hoverMyAltCoins">3 Weeks</button>
                        </li>
                        <li>
                            <button onClick={() =>setActiveWeek(4)} className="rounded-[24px] bg-newStaking border-[1px] border-tableText py-[10px] px-[25px] duration-300 hover:bg-hoverMyAltCoins">4 Weeks</button>
                        </li>
                    </ul>

                    <div className="text-white flex items-center gap-[20px] justify-around flex-wrap md:justify-center">
                        <div className="flex flex-col text-center text-[18px]">
                            <span>You profit</span>
                            <span className="font-bold text-[22px]">+{(Number(rangeValue) * 10) + (activeWeek * 100)}$</span>
                        </div>
                        <div className="flex flex-col text-center text-[18px]">
                            <span>Total</span>
                            <span className="font-bold text-[22px]">{(Number(rangeValue) * 10) + (rangeValue * 100) + (activeWeek * 100)}$</span>
                        </div>
                        <div className="flex flex-col text-center text-[18px]">
                            <span>Percentage</span>
                            <span className="font-bold text-[22px]">{activeWeek * 2}%</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NewStaking
