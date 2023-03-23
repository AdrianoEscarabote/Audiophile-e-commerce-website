import { Countries } from "@/types/CountriesListTypes";
import axios from "axios";
import { useState, useEffect } from "react"

const useCountries = () => {
  const [CountriesList, setCountriesList] = useState<Countries[]>([])

  useEffect(() => {
    const fetchData = async () => {
      await axios
      .get("/countries.json")
      .then((resolve) => setCountriesList(resolve.data))
      .catch(err => console.error(err)) 
    } 

    fetchData()
  }, [])

  const refetch = async (value: string) => {
    const filterName = value.toLowerCase()

    try {
      const response = await axios.get("/countries.json");
      const countriesList: Countries[] = response.data;
      const filteredList = countriesList.filter(country =>
        country.country_name.toLowerCase().startsWith(filterName)
      );
      setCountriesList(filteredList);
    } catch (error) {
      console.error(error);
    }
  }

  return { CountriesList, refetch }
}

export default useCountries;