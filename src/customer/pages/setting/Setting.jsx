import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

const Setting = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);
  const [copied, setCopied] = useState(false);
  const [promoSubscribed, setPromoSubscribed] = useState(true);
  const [wishlistEnabled, setWishlistEnabled] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText("REF123");
    setCopied(true);
    toast.success("Referral code copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-4 sm:px-6 py-10">
      <Toaster />
      <div className="max-w-3xl mx-auto bg-[#1c1c1e] p-6 sm:p-8 rounded-2xl shadow-md border border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-8">
          Settings
        </h2>

        <div className="space-y-8">
          {/* Notifications */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Order Notifications</h3>
            <div className="space-y-4">
              {[
                {
                  label: "Email Notifications",
                  state: emailNotif,
                  setState: setEmailNotif,
                },
                {
                  label: "SMS Notifications",
                  state: smsNotif,
                  setState: setSmsNotif,
                },
                {
                  label: "Push Notifications",
                  state: pushNotif,
                  setState: setPushNotif,
                },
              ].map(({ label, state, setState }) => (
                <div key={label} className="flex justify-between items-center">
                  <span>{label}</span>
                  <Switch
                    checked={state}
                    onChange={setState}
                    className={`${
                      state ? "bg-orange-500" : "bg-gray-600"
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
                  >
                    <span
                      className={`${
                        state ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                    />
                  </Switch>
                </div>
              ))}
            </div>
          </section>

          {/* Promotional Emails */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Promotional Emails</h3>
            <button
              onClick={() => {
                setPromoSubscribed((prev) => !prev);
                toast.success(
                  promoSubscribed
                    ? "Unsubscribed from promotional emails"
                    : "Subscribed to promotional emails"
                );
              }}
              className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                promoSubscribed
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              {promoSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </section>

          {/* Wishlist */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Wishlist Updates</h3>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setWishlistEnabled(true);
                  toast.success("Wishlist updates enabled");
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  wishlistEnabled
                    ? "bg-green-500 border-green-600 text-white"
                    : "bg-gray-700 border-gray-600 text-gray-300"
                }`}
              >
                ✔️
              </button>
              <button
                onClick={() => {
                  setWishlistEnabled(false);
                  toast.success("Wishlist updates disabled");
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                  !wishlistEnabled
                    ? "bg-red-500 border-red-600 text-white"
                    : "bg-gray-700 border-gray-600 text-gray-300"
                }`}
              >
                ❌
              </button>
            </div>
          </section>

          {/* Referral */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Referral Code</h3>
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#2d2d2d] px-4 py-1 rounded-md border border-gray-600 text-sm tracking-wider">
                REF123
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-4 py-1.5 bg-orange-500 hover:bg-orange-600 rounded-md text-sm text-white"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <ClipboardIcon className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Setting;
