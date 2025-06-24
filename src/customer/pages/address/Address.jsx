import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Address = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Nikita Choudhary",
      line1: "Shardaram park flat no.A2 opp Ruby hall clinic",
      city: "Pune",
      pincode: "411001",
      state: "Maharashtra",
      mobile: "8411014247",
      tag: "Home",
      isDefault: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const emptyForm = {
    name: "",
    line1: "",
    city: "",
    pincode: "",
    state: "",
    mobile: "",
    tag: "Home",
    isDefault: false,
  };

  const [form, setForm] = useState(emptyForm);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    const requiredFields = [
      "name",
      "line1",
      "city",
      "pincode",
      "state",
      "mobile",
    ];
    for (let field of requiredFields) {
      if (!form[field]) return toast.error(`Missing ${field}`);
    }

    if (form.isDefault) {
      addresses.forEach((addr) => (addr.isDefault = false));
    }

    if (editingAddress) {
      setAddresses((prev) =>
        prev.map((a) =>
          a.id === editingAddress.id ? { ...form, id: editingAddress.id } : a
        )
      );
      toast.success("Address Updated");
    } else {
      setAddresses([...addresses, { ...form, id: Date.now() }]);
      toast.success("Address Added");
    }

    setForm(emptyForm);
    setEditingAddress(null);
    setShowModal(false);
  };

  const handleEdit = (addr) => {
    setEditingAddress(addr);
    setForm(addr);
    setShowModal(true);
  };

  const handleRemove = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    toast.success("Address Removed");
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-4 sm:px-6 py-10">
      <Toaster />
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-white">Saved Addresses</h2>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-600 rounded-md"
          >
            + Add New Address
          </button>
        </div>

        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-[#1a1a1a] p-5 rounded-xl mb-5 border border-gray-800 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:items-start">
              <div>
                <p className="text-lg font-semibold">{addr.name}</p>
                <p className="text-gray-300">{addr.line1}</p>
                <p className="text-gray-300">
                  {addr.city} - {addr.pincode}, {addr.state}
                </p>
                <p className="text-gray-300 mt-1">Mobile: {addr.mobile}</p>
              </div>
              <div className="flex flex-col items-start sm:items-end">
                <span className="px-2 py-1 mb-2 rounded-full bg-orange-500/20 text-xs text-orange-400 border border-orange-500/30">
                  {addr.tag}
                </span>
                {addr.isDefault && (
                  <span className="text-xs text-blue-200 font-medium">
                    Default
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row justify-end gap-3 text-sm font-medium">
              <button
                onClick={() => handleEdit(addr)}
                className="text-blue-400 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleRemove(addr.id)}
                className="text-red-400 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="bg-[#1a1a1a] p-6 sm:p-8 rounded-xl w-full max-w-xl shadow-xl">
            <h3 className="text-xl font-bold mb-6 text-orange-400">
              {editingAddress ? "Edit Address" : "Add New Address"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                className="bg-black text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-orange-500"
                placeholder="Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                className="bg-black text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-orange-500"
                placeholder="Mobile"
                value={form.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
              />
              <input
                className="bg-black text-white px-4 py-2 rounded-md border border-gray-600 col-span-full focus:outline-none focus:border-orange-500"
                placeholder="Address Line"
                value={form.line1}
                onChange={(e) => handleChange("line1", e.target.value)}
              />
              <input
                className="bg-black text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-orange-500"
                placeholder="City"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
              <input
                className="bg-black text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-orange-500"
                placeholder="State"
                value={form.state}
                onChange={(e) => handleChange("state", e.target.value)}
              />
              <input
                className="bg-black text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-orange-500"
                placeholder="Pincode"
                value={form.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
              />
              <select
                className="bg-black text-white px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-orange-500"
                value={form.tag}
                onChange={(e) => handleChange("tag", e.target.value)}
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </select>
              <label className="flex items-center gap-2 text-sm mt-2 col-span-full">
                <input
                  type="checkbox"
                  checked={form.isDefault}
                  onChange={(e) => handleChange("isDefault", e.target.checked)}
                />
                Set as default
              </label>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
              <button
                onClick={() => {
                  setShowModal(false);
                  setForm(emptyForm);
                  setEditingAddress(null);
                }}
                className="text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-md font-medium"
              >
                {editingAddress ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
