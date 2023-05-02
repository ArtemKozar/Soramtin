import {useEffect, useState} from 'react'

const useCategoriesAPI = () => {
    const API_URL_CATEGORIES =
        'https://jsonplaceholder.typicode.com/users/1/albums'
    const [categories, setCategories] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(API_URL_CATEGORIES)
                const categories = await result.json()
                setCategories(categories)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchData()
    }, [])

    return {categories, error}
}

export default useCategoriesAPI
