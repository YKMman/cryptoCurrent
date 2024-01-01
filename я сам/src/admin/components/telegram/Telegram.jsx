

const Telegram = () => {
    return (
        <div>
                    <div className="bg-[#17181c] p-[20px] inline-flex flex-col rounded-[16px]">
                        <h2 className="text-[#33a0ad] mb-[10px] text-[20px] font-semibold">Telegram Notifications</h2>
                        <label className="flex flex-col gap-[5px] mb-[25px]">
                            <span className="text-white">Telegram ID</span>
                            <input type='text' className="bg-adminInput rounded-[16px] py-[10px] px-[16px] text-white"/>
                            <span className="text-[#717374]">Для прикрепления юзера, укажите его почту</span>
                        </label>
                        <button className="bg-adminBtn py-[6px] px-[15px] text-[15px] rounded-[5px] w-fit text-white duration-300 hover:opacity-[0.56]">Save</button>
                    </div>
        </div>
    )
}

export default Telegram
