import axios from 'axios';
import {useState, useEffect} from 'react';

function useFetch(method, url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log('Hello');

  useEffect(() => {
    console.log('Hello1');
    axios({
      method,
      url,
    })
      .then(res => res.data)
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return [isLoading, data, error];
}

export default useFetch;
