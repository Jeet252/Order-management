export default function SearchBar({ searchQuery, setSearchQuery }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
    }
  };
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by customer name..."
        onKeyDown={handleKeyPress}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}
