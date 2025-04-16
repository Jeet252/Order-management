import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useApi } from "../context/apiContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { token } = useAuth();
  const { getApi } = useApi();
  const [isValidToken, setIsValidToken] = useState(null); // Track token validation status

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        console.log("No token found, redirecting to login");
        setIsValidToken(false);
        return;
      }

      try {
        const response = await getApi("verifytoken", token);
        localStorage.setItem("userId", response.data.id);
        console.log("Token is valid:", response);
        setIsValidToken(true);
      } catch (error) {
        console.error("Token verification failed:", error);
        setIsValidToken(false);
      }
    };

    verifyToken();
  }, [token, getApi]);

  // Show a loading state while verifying the token

  // Redirect to login if the token is invalid
  if (!isValidToken) {
    return <Navigate to="/login" replace />;
  }

  // Render the children if the token is valid
  return children;
}
