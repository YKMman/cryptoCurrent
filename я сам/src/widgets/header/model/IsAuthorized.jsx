// import { useSelector } from "react-redux"
// import { userStore } from "../../../store/user/userSlice"


export const IsAuthorized = () => {
    
    // const selector = useSelector(userStore)
    var match = document.cookie.match(new RegExp("(^| )" + 'auth' + "=([^;]+)"));

    if (!match) return false

    return true
    // if (selector.length < 1) return false

    // return true
}

