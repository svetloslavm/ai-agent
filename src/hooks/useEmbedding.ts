import { useState } from "react";
import { toast } from "react-toastify";

export const useEmbedding = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchEmbedding = async (prompt: string) => {
    setIsLoading(true);

    const response = await fetch(location.origin + "/embedding", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });

    setIsLoading(false);

    if (response.status !== 200) {
      const error = await response.text();
      return toast.error(JSON.parse(error).message);
    }
  };

  return { isLoading, fetchEmbedding };
};
