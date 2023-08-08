import http_config from "../../config/http_config";
import axiosInstance from "../../core/axiosInterceptors";

export const fetchPersonLogs = (personId, date) => {
  try {
    return axiosInstance.get(
      // http_config.BASE_URL + `/attendance/1000/${personId}?date=${date}`
      // http_config.BASE_URL + `/attendance/1000/12344?date=8/5/2023`
      http_config.BASE_URL + `attendance/1000/12344?date=${date}`
    );
  } catch (err) {
    throw err;
  }
};
