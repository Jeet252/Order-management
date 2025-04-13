import React from "react";
import OrderForm from "./OrderForm";

export default function FormSection() {
  return (
    <section className="flex justify-center items-center min-h-[calc(100vh-80px)] px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md space-y-6 transition-all">
        <h2 className="text-2xl font-bold text-slate-800">Submit Order</h2>
        <OrderForm />
      </div>
    </section>
  );
}
