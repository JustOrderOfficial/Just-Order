import React from "react";

const dummyOrders = [
  {
    id: "ORD123456",
    date: "2025-06-01",
    items: [
      { name: "Black Hoodie", qty: 1 },
      { name: "Cargo Pants", qty: 2 },
    ],
    total: "₹2,499",
    status: "Delivered",
  },
  {
    id: "ORD123457",
    date: "2025-05-28",
    items: [{ name: "Graphic T-Shirt", qty: 3 }],
    total: "₹1,200",
    status: "Pending",
  },
  {
    id: "ORD123458",
    date: "2025-05-20",
    items: [
      { name: "Sneakers", qty: 1 },
      { name: "Cap", qty: 1 },
    ],
    total: "₹3,150",
    status: "Delivered",
  },
];

const Order = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">My Orders</h2>

        {dummyOrders.map((order) => (
          <div
            key={order.id}
            className="bg-[#2d2d2d] p-5 rounded-xl mb-5 shadow-md border border-gray-700"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-lg font-semibold">Order ID: {order.id}</p>
                <p className="text-sm text-gray-400">Date: {order.date}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-600"
                    : "bg-yellow-500 text-black"
                }`}
              >
                {order.status}
              </span>
            </div>

            <div className="mb-2">
              <p className="font-medium mb-1">Items:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} × {item.qty}
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-semibold text-orange-400">
              Total: {order.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
