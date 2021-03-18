import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://katrina-dierking-httc.github.io/shhh/',
        headers: {
            Authorization:token
        }
    })
}