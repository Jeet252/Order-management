import React, { useState } from "react";
import { Lock, User } from "react-feather";
import InputField from "./InputField";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    // Add login logic here
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField
        id="email"
        type="email"
        placeholder="Enter Email Id"
        icon={User}
        label="Email Address"
        value={inputValue.username}
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
