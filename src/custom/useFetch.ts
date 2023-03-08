import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/data.json').then((response) => response.data)
      setData(response)
    }

    fetchData()
  }, [])

  if (!data) {
    return null
  }

  return { data }
}

export default useFetch;