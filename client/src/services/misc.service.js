import axios from "axios";
import { authHeader } from "../helpers";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const miscService = {
  getCountry,
};



function getCountry() {
  const requestOptions = {
    method: "GET",
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };

  return fetch(`${API_BASE_URL}/country`, requestOptions).then(
    handleResponse
  );
}

function logout() {
    localStorage.removeItem("user");
    //window.location.reload(true);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        
      }

      const error = (data && data) || response;
      return Promise.reject(error);
    }

    return data;
  });
}
