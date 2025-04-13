import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import OrdersTable from "../components/OrderTable";
import OrderToolbar from "../components/OrderToolBar";

export default function ManageOrder() {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSort = (e) => {
    const value = e.target.value;
    const sort_data = orders.sort((a, b) => {
      if (value === "quantity") return b.quantity - a.quantity;
      if (value === "amount") return b.amount - a.amount;
      if (value === "date")
        return new Date(a.deliveryDate) - new Date(b.deliveryDate);
      return 0;
    });
    setOrders([...sort_data]);
  };
  useEffect(() => {
    const dummyOrders = [
      {
        customerName: "John Doe",
        quantity: 50,
        deliveryDate: "2025-04-20",
        amount: 50 * 280,
      },
      {
        customerName: "Jane Smith",
        quantity: 100,
        deliveryDate: "2025-04-18",
        amount: 100 * 280,
      },
      {
        customerName: "Alice Johnson",
        quantity: 75,
        deliveryDate: "2025-04-22",
        amount: 75 * 280,
      },
    ];
    const filterData = dummyOrders.filter((e) =>
      e.customerName.toLowerCase().includes(searchQuery)
    );
    setOrders([...filterData]);
  }, [searchQuery]);
  return (
    <div className="bg-orange-50 min-h-screen text-slate-800">
      <Navbar userName={"Jeet Nakrani"} />

      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-slate-800">
          Manage Orders
        </h1>
        <OrderToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSort={handleSort}
        />

        <OrdersTable orders={orders} />
      </main>
    </div>
  );
}
