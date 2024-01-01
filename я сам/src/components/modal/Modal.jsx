import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
export const Modal = ({status, message, setModal}) => {

    const [classes, setClasses] = useState('')

    useEffect(() => {
        setClasses('opacity-100')
        setTimeout(() => {
            setClasses('opacity-0')
        }, 2500)
    }, [message])



    if (status === 200) {
        return (
            <div className={`bg-green p-[10px] absolute top-0 right-0 z-50 duration-500 ${classes}`}>
                <span className="font-bold text-white">
                    {message}
                </span>
            </div>
        )
    }

    if (status === 400) {
        return (
            <div className={`bg-rose-700 p-[10px] absolute top-0 right-0 z-50 duration-500 ${classes}`}>
                <span className="font-bold text-white">
                    {message}
                </span>
            </div>
        )
    }

    if (status === 300) {
        return (
            <div className={`bg-yellow-700 p-[10px] absolute top-0 right-0 z-50 duration-500 ${classes}`}>
                <span className="font-bold text-white">
                    {message}
                </span>
            </div>
        )
    }

}


