import { redirect } from "react-router-dom";

export const handleAuth = () => {
  const authToken = localStorage.getItem("auth-token");
  if (authToken) {
    // redirect("/dashboard");
    return { authToken: authToken };
  } else {
    // redirect("/login");
    throw new Error("Not Authenticated");
  }
};
