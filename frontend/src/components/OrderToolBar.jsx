export default function OrderToolbar({
  handleSort,
  setSearchQuery,
  searchQuery,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by customer name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* 🔃 Sort */}
      <select
        onClick={handleSort}
        className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="">Sort By</option>
        <option value="quantity">Quantity</option>
        <option value="date">Delivery Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
}
