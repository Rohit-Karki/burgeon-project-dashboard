import http_config from "../../config/http_config";
import axiosInstance from "../../core/axiosInterceptors";

const fetchUserProfile = async (userId) => {
  return await axiosInstance.get(
    http_config.BASE_URL + `org/1000/user-profile/${userId}/`
  );
};

export { fetchUserProfile };
