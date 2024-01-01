import axios from "axios"

export const authorizationApi = async (data) => {
    const { login, password } = data

    const request = await axios.post('http://localhost:8081/user/auth', {
        login,
        password,
    },
    {
        method: 'post',
        headers: {
            'Content-Type': 'text/plain',
        },
    })

    return request
}