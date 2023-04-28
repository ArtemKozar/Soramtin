import { useEffect, useState } from 'react'

const useListAPI = () => {
  const API_URL_LIST = 'https://jsonplaceholder.typicode.com/users/4/posts'
  const [list, setList] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(API_URL_LIST)
        const list = await result.json()
        setList(list)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  }, [])
  return { list, error }
}

export default useListAPI
