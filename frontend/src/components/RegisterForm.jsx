import React, { useState } from "react";
import InputField from "./InputField";
import { Lock, Mail, User } from "react-feather";

export default function RegisterForm() {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_DOMINE_NAME}/api/register`, // Use the correct endpoint
        {
          method: "POST", // Change to POST
          headers: {
            "Content-Type": "application/json", // Specify JSON content type
          },
          body: JSON.stringify(inputValue), // Send data in the request body
        }
      );
      if (!response.ok) {
        // Parse the error response from the server
        const errorData = await response.json();
        console.error("Error during registration:", errorData.message); // Log the error message
        alert(errorData.message); // Optionally show the error message to the user
        return;
      }
      const data = await response.json(); // Parse the JSON response
      console.log("Registration successful:", data); // Log the response
    } catch (error) {
      console.error("Error during registration:", error); // Log any errors
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField
        id="username"
        type="text"
        placeholder="Enter Name"
        icon={User}
        label="Name"
        value={inputValue.username}
        setValue={setInputValue}
      />
      <InputField
        id="email"
        type="email"
        placeholder="Enter Email Id"
        icon={Mail}
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
          Register
        </button>
      </div>
      <div className="text-sm text-center text-slate-600">
        Already have an account?{" "}
        <a href="/login" className="text-orange-600 hover:underline">
          Login here
        </a>
      </div>
    </form>
  );
}
