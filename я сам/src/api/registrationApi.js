import axios from "axios"

export const registrationApi = async (data) => {
    const { login, password, email } = data

    const request = await axios.post('http://localhost:8081/user/register', {
        login,
        password,
        email
    },
    {
        method: 'post',
        headers: {
            'Content-Type': 'text/plain',
        },
    })

    return request
}