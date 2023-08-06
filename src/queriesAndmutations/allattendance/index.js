import http_config from "../../config/http_config";
import axiosInstance from "../../core/axiosInterceptors";
export const fetchAllAttendances = async () => {
  const result = await axiosInstance.get(
    http_config.BASE_URL + "attendance/1000?page=1&pageSize=10"
  );

  return result;
};
