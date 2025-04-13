import React from "react";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="bg-orange-50 text-slate-800 min-h-screen flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-slate-800">Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
}
