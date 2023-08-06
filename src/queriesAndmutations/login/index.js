import axiosInstance from "../../core/axiosInterceptors";
import http_config from "../../config/http_config";

export const loginUserFn = (data) => {
  return axiosInstance.post(http_config.BASE_URL, {
    email: data.email,
    password: data.password,
  });
};
