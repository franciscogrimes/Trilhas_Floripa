import { useState, useEffect } from "react";

function useTrilhas() {
  const [trilhas, setTrilhas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrilhas = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("./trilhas.json");
        if (!response.ok) {
          throw new Error("Falha ao carregar os dados");
        }
        const data = await response.json();
        setTrilhas(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrilhas();
  }, []);

  return { trilhas, isLoading, error };
}

export default useTrilhas;
