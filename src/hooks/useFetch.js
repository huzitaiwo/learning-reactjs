import { useEffect, useState} from 'react'

export const useFetch = url => {
  const [data, setData] = useState()
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)

      try{
        const res = await fetch(url)
        const json = await res.json()

        setIsPending(false)
        setData(json)
      } catch(err) {
        setError('Could not fetch the data')
      }

    }

    fetchData()
  }, [url])

  return { data, isPending, error }

}
