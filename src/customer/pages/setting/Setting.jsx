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
    <div className="min-h-screen bg-[#1c1c1e] text-white px-6 py-10">
      <Toaster />
      <div className="max-w-3xl mx-auto bg-[#2d2d2d] p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">Settings</h2>

        <div className="space-y-6">
          {/* Notifications */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Order Notifications</h3>
            <div className="flex justify-between items-center py-2">
              <span>Email Notifications</span>
              <Switch
                checked={emailNotif}
                onChange={setEmailNotif}
                className={`${
                  emailNotif ? "bg-orange-500" : "bg-gray-600"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    emailNotif ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                />
              </Switch>
            </div>
            <div className="flex justify-between items-center py-2">
              <span>SMS Notifications</span>
              <Switch
                checked={smsNotif}
                onChange={setSmsNotif}
                className={`${
                  smsNotif ? "bg-orange-500" : "bg-gray-600"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    smsNotif ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                />
              </Switch>
            </div>
            <div className="flex justify-between items-center py-2">
              <span>Push Notifications</span>
              <Switch
                checked={pushNotif}
                onChange={setPushNotif}
                className={`${
                  pushNotif ? "bg-orange-500" : "bg-gray-600"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    pushNotif ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                />
              </Switch>
            </div>
          </div>

          {/* Promo Toggle */}
          <div>
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
              className={`px-4 py-2 rounded-md text-white ${
                promoSubscribed
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              {promoSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </div>

          {/* Wishlist Updates Toggle */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Wishlist Updates</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setWishlistEnabled(true);
                  toast.success("Wishlist updates enabled");
                }}
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                  wishlistEnabled
                    ? "bg-green-500 border-green-600"
                    : "bg-gray-700 border-gray-600"
                }`}
              >
                ✔️
              </button>
              <button
                onClick={() => {
                  setWishlistEnabled(false);
                  toast.success("Wishlist updates disabled");
                }}
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                  !wishlistEnabled
                    ? "bg-red-500 border-red-600"
                    : "bg-gray-700 border-gray-600"
                }`}
              >
                ❌
              </button>
            </div>
          </div>

          {/* Referral */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Referral Code</h3>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-800 px-3 py-1 rounded-md border border-gray-600 text-sm">
                REF123
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-3 py-1 bg-orange-500 hover:bg-orange-600 rounded-md text-sm"
              >
                {copied ? (
                  <CheckIcon className="w-4 h-4" />
                ) : (
                  <ClipboardIcon className="w-4 h-4" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
