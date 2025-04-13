import React from "react";

export default function SortDropdown({ onSortChange }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1 text-slate-700">
        Sort By
      </label>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
      >
        <option value="">Select</option>
        <option value="date">Delivery Date</option>
        <option value="quantity">Quantity</option>
      </select>
    </div>
  );
}
