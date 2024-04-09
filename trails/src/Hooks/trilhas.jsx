import { useState, useEffect } from "react";
import trilhasData from "./trilhas.json"; // Renomeie a importação para evitar conflito de nomes

function useTrilhas() {
  const [trilhas, setTrilhas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrilhas = async () => {
      setIsLoading(true); // Carregamento válido
      try {
        setTrilhas(trilhasData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrilhas();
  }, []); // Não há dependências, então isso só é executado uma vez

  return { trilhas, isLoading, error };
}

export default useTrilhas;
