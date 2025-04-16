import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ManageOrder from "./pages/ManageOrder";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/authContext";
import { ApiProvider } from "./context/apiContext";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <ApiProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/manageorder"
              element={
                <PrivateRoute>
                  <ManageOrder />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </ApiProvider>
    </AuthProvider>
  );
}

export default App;
