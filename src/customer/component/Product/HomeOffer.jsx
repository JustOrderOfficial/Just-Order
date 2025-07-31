import { motion } from "framer-motion";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const OfferCard = () => {
  return (
    <div className="bg-[#18181b] px-4 py-8">
      <motion.div
        whileHover={{
          scale: 1.025,
          boxShadow: "0 10px 30px 0 rgba(255,115,0,0.3)",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="flex flex-col md:flex-row border border-orange-400/70 rounded-3xl bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#1c1917] overflow-hidden max-w-6xl mx-auto shadow-lg"
        style={{ borderWidth: "1.5px" }}
      >
        {/* Image Section */}
        <div className="w-full md:w-72 h-64 md:h-auto relative">
          <img
            src="./assets/images/t_shirts/Offer.png"
            alt="Back view of T-shirt"
            className="w-full h-full object-cover object-center rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center px-4 sm:px-6 py-6 text-white relative flex-1">
          {/* Discount Badge */}
          {/* Discount Badge */}
          <span
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full shadow-md text-[10px] xs:text-xs sm:text-sm flex items-center gap-1 select-none whitespace-nowrap z-10"
            style={{ minWidth: "60px", justifyContent: "center" }}
          >
            <LocalOfferIcon
              fontSize="inherit"
              className="text-white"
              style={{
                fontSize: "12px", // slightly larger for better visibility
                minWidth: "14px",
                minHeight: "14px",
              }}
            />
            <span className="hidden xs:inline">50% OFF</span>
            <span className="inline xs:hidden">50%</span>
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug drop-shadow-lg pt-5">
            Exclusive Offer:{" "}
            <span className="text-orange-400">Up to 50% off</span>, only for
            this month
          </h2>

          <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl">
            Shop now and enjoy up to{" "}
            <span className="font-semibold text-orange-300">50% off</span> on
            selected items. Limited time only!
          </p>

          <button className="mt-5 sm:mt-6 w-full sm:w-44 py-3 bg-orange-500 hover:bg-orange-600 rounded-3xl font-bold text-white text-sm sm:text-lg shadow-lg transition duration-300 flex items-center justify-center gap-2 select-none">
            <LocalOfferIcon fontSize="small" className="text-white" />
            Shop Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferCard;
