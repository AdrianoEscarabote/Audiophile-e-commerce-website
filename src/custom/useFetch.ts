import { useEffect, useState } from 'react';
import axios from 'axios';
import { DataProps } from '@/types/ProductDetailsProps';

const useFetch = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/data.json").
      then((response) => response.data)
      .catch((err) => setError(err)) 
      setData(response)
    };

    fetchData()
  }, [])

  const refetch = async () => {
    const response = await axios.get("/data.json").
    then((response) => response.data)
    .catch((err) => setError(err)) 
    console.log(data)
    setData(response)
  }

  return { data, error, refetch };
};

export default useFetch;