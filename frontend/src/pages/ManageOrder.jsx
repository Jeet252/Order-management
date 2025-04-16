import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import OrdersTable from "../components/OrderTable";
import OrderToolbar from "../components/OrderToolBar";
import { useApi } from "../context/apiContext";

export default function ManageOrder() {
  const { getApi } = useApi();
  const [allOrders, setAllOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState(""); // Track sorting option

  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = JSON.parse(sessionStorage.getItem("user")).id;
        const response = await getApi(`orders/${userId}`);
        setAllOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [getApi]);

  const filteredAndSortedOrders = useMemo(() => {
    let filteredOrders = allOrders;

    if (searchQuery) {
      filteredOrders = allOrders.filter((order) =>
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption) {
      filteredOrders = [...filteredOrders].sort((a, b) => {
        if (sortOption === "quantity") return b.quantity - a.quantity;
        if (sortOption === "amount") return b.totalAmount - a.totalAmount;
        if (sortOption === "date")
          return new Date(a.deliveryDate) - new Date(b.deliveryDate);
        return 0;
      });
    }

    return filteredOrders;
  }, [allOrders, searchQuery, sortOption]);

  return (
    <div className="bg-orange-50 min-h-screen text-slate-800">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-slate-800">
          Manage Orders
        </h1>
        <OrderToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSort={(e) => setSortOption(e.target.value)}
        />

        <OrdersTable orders={filteredAndSortedOrders} />
      </main>
    </div>
  );
}
