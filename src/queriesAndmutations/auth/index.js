export const handleAuth = () => {
  const authToken = localStorage.getItem("auth-token");
  if (authToken) {
    const userData = localStorage.getItem("data");
    const parsedUserData = JSON.parse(userData);
    return { userData: parsedUserData, authToken: authToken };
  } else {
    throw new Error("Not Authenticated");
  }
};
