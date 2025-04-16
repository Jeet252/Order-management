import axios from "axios";
import { createContext, useContext } from "react";

const ApiContext = createContext();
export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }) => {
  const Domine = import.meta.env.VITE_DOMINE_NAME;

  const postApi = async (apiPath, data) => {
    const response = await axios.post(`${Domine}/api/${apiPath}`, data);
    return response;
  };
  const getApi = async (apiPath, token) => {
    const response = await axios.get(`${Domine}/api/${apiPath}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  };
  return (
    <ApiContext.Provider value={{ postApi, getApi }}>
      {children}
    </ApiContext.Provider>
  );
};
