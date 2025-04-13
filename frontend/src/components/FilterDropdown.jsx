import React from "react";

export default function FilterDropdown({ onFilterChange }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1 text-slate-700">
        Filter By Status
      </label>
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
  );
}
