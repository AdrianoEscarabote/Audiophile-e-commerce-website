import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/data.json').
      then((response) => response.data)
      .catch((err) => setError(err)) 
      setData(response)
    };

    fetchData()
  }, [])

  return { data, error };
};

export default useFetch;