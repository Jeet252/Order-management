import React, { useState } from "react";
import { Lock, User } from "react-feather";
import InputField from "./InputField";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_DOMINE_NAME}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValue),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Parse the JSON response
      console.log(data); // Log the response for debugging
    } catch (error) {
      console.log("Error:", error); // Log any errors
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
