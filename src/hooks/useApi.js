import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/api";
import { toast } from "react-toastify";

function useApi() {
  const navigate = useNavigate();
  const fetchData = useCallback(
    async (
      method = "get",
      requestData = null,
      successMessage = "Successfully!!!",
      errorMessage = "Erorr!!!",
      pathNavigate,
      URI
    ) => {
      try {
        const response = await api[method](URI, requestData);
        toast.success(successMessage);
        navigate(pathNavigate || "/");
        return response?.data;
      } catch (error) {
        toast.error(error?.response?.data || errorMessage);
      }
    }
  );
  return fetchData;
}

export default useApi;
