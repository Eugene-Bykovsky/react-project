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

export const createArticle = async (title, imageSrc, description, text, categories) => {
    try {
        await axios.post(`${baseUrl}article/create`, { title, imageSrc, description, text, categories})
        console.log('Статья создана фронт')
    } catch (e) {
        console.log(e)
    }
}

export const deleteArticleById = async (id) => {
    try {
        console.log(id)
        await axios.post(`${baseUrl}article/delete`, { id })
        console.log('Статья удалена')
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
