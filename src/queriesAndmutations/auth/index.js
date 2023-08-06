import { redirect } from "react-router-dom";

export const handleAuth = () => {
  const authToken = localStorage.getItem("authentication-token");
  console.log(authToken);
  if (authToken) {
    return { authToken: authToken };
  } else {
    throw new Error("Not Authenticated");
  }
};
