import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch(url, {
        mode: 'cors'
    })
    .then(response => response.json()).then(resp => console.log(resp))
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;