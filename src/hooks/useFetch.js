import { useEffect, useState} from 'react'

export const useFetch = url => {
  const [data, setData] = useState()
  const [isPending, setIsPending] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const json = await res.json()

      setData(json)
    }

    fetchData()
  }, [url])

  return { data }

}
