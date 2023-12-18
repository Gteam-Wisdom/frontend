import axios from "axios";
import {
  sessionStorageDelete,
  sessionStorageGet,
  sessionStorageSet,
} from "../utils";
import { useAppStore } from "../store/store";
import { SignUp } from "./signup";

// Function to refresh the access token using the refresh token
const refreshAccessToken = async () => {
  try {
    // Make a request to your server to refresh the access token
    const response = await axios.post("localhost:3000/auth/refresh", {
      refresh_token: sessionStorageGet("refresh_token"),
    });

    // Extract the new access token from the response
    const newAccessToken = response.data.accessToken;
    console.log(response);

    // Update the stored access token (e.g., in local storage or state)
    // This is a hypothetical function, replace it with your actual implementation
    sessionStorageSet("access_token", newAccessToken);

    // Return the new access token
    return newAccessToken;
  } catch (error) {
    // Handle token refresh error (e.g., redirect to login page)
    console.error("Error refreshing access token:", error);
    throw error;
  }
};

// Axios request interceptor to attach the access token to outgoing requests
const ResetInterceptors = () => {
  // Remove all interceptors
  axios.interceptors.request.eject(0);
  axios.interceptors.response.eject(0);

  // Set up interceptors again
  axios.interceptors.request.use(
    (config) => {
      const accessToken = sessionStorageGet("access_token");

      console.log(accessToken);

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      } else {
        sessionStorageDelete("access_token");
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (
        error.response &&
        error.response.status === 401 &&
        sessionStorageGet("refresh_token")
      ) {
        try {
          const newAccessToken = await refreshAccessToken();
          const originalRequest = error.config;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};

export const handleLoginOrSignupSuccess = () => {
  ResetInterceptors();
};
