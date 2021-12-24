import axios from 'axios'

const baseUrl = 'http://localhost:8080/'

export const getArticles = async () => {
    try {
        const response = await axios.get(`${baseUrl}article`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getArticleById = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}article/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getUser = async (authPath, login, password ) => {
    try {
        const response = await axios.post(`${baseUrl}user/${authPath}`, {login, password})
        return response.data
    } catch (e) {
        console.log(e)
    }
}
