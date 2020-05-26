import axios from 'axios'

export const axiosWithAuth = () => {
    //Get the token from local storage
    const token = localStorage.getItem('token')

    //Create a header with the token authorization
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://reqres.in/api'
    })
}