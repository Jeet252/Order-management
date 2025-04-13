import React, { useState } from "react";
import InputField from "./InputField";
import { Lock, Mail, User } from "react-feather";

export default function RegisterForm() {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    // Add register logic here
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
