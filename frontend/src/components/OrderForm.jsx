import React, { useState } from "react";
import { Calendar, Package, User } from "react-feather";
import InputField from "./InputField";
import { useApi } from "../context/apiContext";

export default function OrderForm() {
  const [inputValue, setInputValue] = useState({
    customerName: "",
    quantity: "",
    deliveryDate: "",
  });
  const { postApi } = useApi();
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await postApi("orders", inputValue);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="space-y-5" onSubmit={handleClick} noValidate>
      <InputField
        id="customerName"
        type="text"
        placeholder="John Doe"
        icon={User}
        setValue={setInputValue}
        value={inputValue.customerName}
        label="Customer Name"
      />
      <InputField
        id="quantity"
        type="number"
        placeholder="50"
        icon={Package}
        setValue={setInputValue}
        value={inputValue.quantity}
        label="Quantity in KG"
      />
      <InputField
        id="deliveryDate"
        type="date"
        icon={Calendar}
        setValue={setInputValue}
        value={inputValue.deliveryDate}
        label="Delivery Date"
      />
      <div className="pt-3">
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md shadow transition-all focus:ring-2 focus:ring-orange-400 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
