import { useEffect, useRef, useState } from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default function useFetch(url) {
  const isMounted = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:3001/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));

    // getProducts("shoes")
    //   .then((response) => setProducts(response))
    //   .catch((e) => setError(e))
    //   .finally(() => setLoading(false));

    (async () => {
      isMounted.current = true;
      try {
        const response = await fetch(baseUrl + url);

        if (response.ok) {
          const json = await response.json();
          if (isMounted.current) setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        if (isMounted.current) setError(e);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    })();

    return () => (isMounted.current = false);
  }, [url]);

  return { data, error, loading };
}
