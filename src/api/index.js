import axios from 'axios'

const baseUrl = 'http://localhost:8080/'

export const getData = async (urlParam) => {
    try {
        const response = await axios.get(`${baseUrl}${urlParam}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
