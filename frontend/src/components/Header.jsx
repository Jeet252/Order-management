import React from "react";
import SortDropdown from "./SortDropdown";
import FilterDropdown from "./FilterDropdown";

export default function Header({ onSortChange, onFilterChange }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
      <SortDropdown onSortChange={onSortChange} />
      <FilterDropdown onFilterChange={onFilterChange} />
    </div>
  );
}
