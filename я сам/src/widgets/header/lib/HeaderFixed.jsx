import { useEffect, useRef, useState } from "react"

export const HeaderFixed = () => {
    const [scroll, setScroll] = useState(false)
    const scrollRef = useRef(0)


    useEffect(() => {
        window.addEventListener('scroll', () => {
        scrollRef.current = window.scrollY


        scrollRef.current > 750 ? setScroll(true) : setScroll(false)
        })
    }, [])

    return {
        scroll
    }
}


