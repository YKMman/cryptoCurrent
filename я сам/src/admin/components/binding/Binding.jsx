

const Binding = () => {
    return (
        <div className="">   
            <div className="flex gap-[50px] items-center justify-between mb-[20px]">
                <div className="flex flex-col gap-[50px]">
                    <div className="bg-[#17181c] p-[20px] inline-flex flex-col rounded-[16px]">
                        <h2 className="text-[#33a0ad] mb-[10px] text-[20px] font-semibold">Hand Binding</h2>
                        <label className="flex flex-col gap-[5px] mb-[25px]">
                            <span className="text-white">E-mail</span>
                            <input type='text' className="bg-adminInput rounded-[16px] py-[10px] px-[16px] text-white"/>
                            <span className="text-[#717374]">Для прикрепления юзера, укажите его почту</span>
                        </label>
                        <button className="bg-adminBtn py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">Bind</button>
                    </div>
                    <div className="bg-[#17181c] p-[20px] inline-flex flex-col rounded-[16px]">
                        <h2 className="text-[#33a0ad] mb-[10px] text-[20px] font-semibold">Auto Binding</h2>
                        <label className="flex flex-col gap-[5px] mb-[25px]">
                            <span className="text-white">Your domains</span>
                            <input type='text' value='myaltcoins.org' className="bg-adminInput rounded-[16px] py-[10px] px-[16px] text-white"/>
                            <span className="text-[#717374]">Юзеры, которые зарегистрируются, используя ваш домен, будут автоматически прикреплены к вашему аккаунту</span>
                        </label>
                    </div>
                </div>
                <div className="bg-[#17181c] p-[20px] inline-flex flex-col rounded-[16px]">
                    <h2 className="text-[#33a0ad] mb-[10px] text-[20px] font-semibold">Promocode Binding</h2>
                    <div className="flex items-center gap-[10px] mb-[5px]">
                        <span className="text-white">Name</span>
                        <button className="text-[#33a0ad] border-b-[1px] border-[#33a0ad]">Random</button>
                    </div>
                    <label className="flex flex-col gap-[5px] mb-[25px]">
                        <input type='text' className="bg-adminInput rounded-[16px] py-[10px] px-[16px] text-white"/>
                        <span className="text-[#717374]">Промокод, активировав который, юзер получит указанный ниже бонус и привяжется к вашему аккаунту</span>
                    </label>
                    <div className="flex items-center gap-[10px] mb-[5px]">
                        <span className="text-white">Coin </span>
                        <button className="text-[#33a0ad] border-b-[1px] border-[#33a0ad]">Список монет</button>
                    </div>
                    <label className="flex flex-col gap-[5px] mb-[25px]">
                        <input type='text' className="bg-adminInput rounded-[16px] py-[10px] px-[16px] text-white"/>
                        <span className="text-[#717374]">Выберете монету для промокода</span>
                    </label>
                    <div className="flex items-center gap-[10px] mb-[5px]">
                        <span className="text-white">Amount </span>
                    </div>
                    <label className="flex flex-col gap-[5px] mb-[25px]">
                        <input type='text' className="bg-adminInput rounded-[16px] py-[10px] px-[16px] text-white"/>
                        <span className="text-[#717374]">Рандомная сумма промокода. Вы можете выбрать рандомную сумму промокода, указав желаемый диапазон</span>
                    </label>
                    <div className="flex items-center gap-[10px] mb-[5px]">
                        <span className="text-white">Text After Activation </span>
                    </div>
                    <label className="flex flex-col gap-[5px] mb-[25px]">
                        <input type='text' placeholder="Success! You have got 0.00005 BTC" className="bg-adminInput rounded-[16px] py-[10px] px-[16px] text-white"/>
                        <span className="text-[#717374]">Текст покажется после активации промокода в сплывающем сообщении</span>
                    </label>
                    <button className="bg-adminBtn py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">Bind</button>
                </div>
            </div>
            <div className="bg-[#17181c] p-[20px] inline-flex flex-col gap-[10px] rounded-[16px] w-full text-white">
                <div className="grid grid-cols-7 px-[20px] border-b-[1px] border-[#1e2126] pb-[10px]">
                    <span className="text-left">#</span>
                    <span className="text-left">PROMOCODE</span>
                    <span className="text-left">PRIZE</span>
                    <span>TEXT</span>
                    <span>USE COUNT</span>
                    <span>DATE</span>
                    <span>ACTIONS</span>
                </div>
                <div className="grid grid-cols-7 px-[20px] border-b-[1px] border-[#1e2126] pb-[10px]">
                    <span className="text-left">1</span>
                    <span className="text-left">D2u1vPjz</span>
                    <span className="text-left">100 usdt.trc20</span>
                    <span>Success!</span>
                    <span>0</span>
                    <span>2023.11.11 03:51</span>
                    <button className="bg-adminBtnRemove py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Binding
