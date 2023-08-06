import Axios from "axios";
// import { onLogout, onRefresh } from 'data/auth/auth.service';

const axiosInstance = Axios.create({
  timeout: 10000,
  withCredentials: true,
});

//add token to all request, for authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const cfg = { ...config };
    const token = localStorage.getItem("token");
    if (token) {
      cfg.headers.Authorization = `Bearer ${token}`;
    }
    return cfg;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Send payload direct
    return response.data;
  },

  async (error) => {
    console.log(error);
    if (error.response?.status === 410) {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        // Promise.reject(new Error('Authentication error. Login again.'));

        localStorage.clear();
        // onLogout();
        return;
      }

      try {
        // await onRefresh(userId);
      } catch (error) {
        localStorage.clear();
        // onLogout();
      }
      return Promise.resolve(axiosInstance(error.config));
    }
    if (error.response?.status === 401) {
      localStorage.clear();
      // onLogout();
    }

    if (error.response && error.response.data) {
      //send error payload only
      return Promise.reject(error.response.data);
    }
    return Promise.reject(
      new Error("Some unusual error occured, please try again")
    );
  }
);

export default axiosInstance;
