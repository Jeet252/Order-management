import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useApi } from "../context/apiContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { token } = useAuth();
  const { getApi } = useApi();
  const [isValidToken, setIsValidToken] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        console.log("No token found, redirecting to login");
        setIsValidToken(false);
        return;
      }

      try {
        const response = await getApi("verifytoken", token);
        if (response.data.message === "Token is Verified") {
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              id: response.data.id,
              username: response.data.username,
            })
          );
          setIsValidToken(true);
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        setIsValidToken(false);
      }
    };

    verifyToken();
  }, [token, getApi]);

  if (isValidToken === null) {
    return <div>Loading...</div>;
  }

  if (!isValidToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
