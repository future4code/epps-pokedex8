import { useState, useEffect } from "react";
import axios from "axios";

export default function useRequestData(url, innitialData) {
  const [data, setData] = useState(innitialData);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return data;
}
