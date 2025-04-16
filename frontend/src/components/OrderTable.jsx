export default function OrdersTable({ orders }) {
  const dateFormating = (date) => {
    const fromatedDate = date.split("-");
    return (
      fromatedDate[2].split("T")[0] +
      "/" +
      fromatedDate[1] +
      "/" +
      fromatedDate[0]
    );
  };
  return (
    <div className="overflow-x-auto rounded-xl shadow">
      <table className="min-w-full bg-white text-sm text-left text-slate-700">
        <thead className="bg-orange-100 text-slate-800 font-semibold">
          <tr>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Quantity (KG)</th>
            <th className="px-4 py-3">Delivery Date</th>
            <th className="px-4 py-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-orange-50 transition-colors"
              >
                <td className="px-4 py-3">{order.customerName}</td>
                <td className="px-4 py-3">{order.quantity}</td>
                <td className="px-4 py-3">
                  {dateFormating(order.deliveryDate)}
                </td>
                <td className="px-4 py-3">{order.totalAmount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-center text-slate-500 px-4 py-6 italic"
              >
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
