import React, { useState } from "react";
import { Lock, User } from "react-feather";
import InputField from "./InputField";
import { useAuth } from "../context/authContext";
import { useApi } from "../context/apiContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const { postApi } = useApi();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postApi("login", inputValue);

      if (response.data.message === "Login successful") {
        login(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField
        id="email"
        type="email"
        placeholder="Enter Email Id"
        icon={User}
        label="Email Address"
        value={inputValue.email}
        setValue={setInputValue}
      />
      <InputField
        id="password"
        type="password"
        placeholder="Enter Password"
        icon={Lock}
        label="Password"
        value={inputValue.password}
        setValue={setInputValue}
      />
      <div className="pt-3">
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md shadow transition-all focus:ring-2 focus:ring-orange-400 focus:outline-none"
        >
          Login
        </button>
      </div>
      <div className="text-sm text-center text-slate-600">
        Don't have an account?{" "}
        <a href="/register" className="text-orange-600 hover:underline">
          Register here
        </a>
      </div>
    </form>
  );
}
