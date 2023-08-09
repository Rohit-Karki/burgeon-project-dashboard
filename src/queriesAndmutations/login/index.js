import axiosInstance from "../../core/axiosInterceptors";
import http_config from "../../config/http_config";

export const loginUserFn = (data) => {
  return axiosInstance.post(http_config.BASE_URL + "/auth/login", {
    phoneNumber: data.phoneNo,
    password: data.password,
    // phoneNumber: "9869419231",
    // password: "123456",
    code: "1000",
  });
};

export const logoutUser = () => {
  return localStorage.clear();
};
