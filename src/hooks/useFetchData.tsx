import { useEffect, useState } from "react";
import { notification } from "antd";

function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: T = await res.json();
        setData(result);
      } catch (err: any) {
        const errorMessage = err.message || "Fetching data failed";
        setError(errorMessage);
        notification.error({
          message: "Error",
          description: errorMessage,
          placement: "topRight",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}

export default useFetchData;
