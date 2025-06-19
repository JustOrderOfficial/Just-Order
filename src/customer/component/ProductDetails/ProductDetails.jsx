import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Box, Button, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard.jsx";
import Grid from "@mui/material/Grid";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://www.shutterstock.com/image-illustration/black-white-shirt-mock-monochrome-600nw-2475736085.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="text-white lg:px-24 py-10 px-2 font-[Poppins,sans-serif] bg-[#18181b] min-h-screen">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol
          role="list"
          className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          {product.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="mr-2 text-sm font-semibold text-orange-400 hover:underline tracking-wide"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-teal-400"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <a
              href={product.href}
              aria-current="page"
              className="font-bold text-teal-200 hover:text-orange-400"
            >
              {product.name}
            </a>
          </li>
        </ol>
      </nav>

      {/* Main Section */}
      <section className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 px-4 pt-4">
        {/* Image Gallery */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-teal-400/40 max-w-[30rem] max-h-[35rem] bg-[#18181b]">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-wrap gap-4 items-center pt-5">
            {[...Array(3)].map((_, index) => (
              <img
                key={index}
                src="/assets/images/t_shirts/Black_Full_Tshirt.png"
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-xl cursor-pointer border-2 border-teal-400/40 hover:border-orange-400 transition"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-1 max-w-2xl mx-auto px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
          <div className="mb-2">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Universaloutfit
            </h1>
            <h2 className="text-lg lg:text-xl text-teal-200 pt-1 font-semibold tracking-wide">
              Casual Puff Sleeves Solid Women White Top
            </h2>
          </div>

          {/* Price & Reviews */}
          <div className="mt-4">
            <p className="text-4xl font-bold text-orange-400 drop-shadow-lg">
              {product.price}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      reviews.average > rating
                        ? "text-orange-400"
                        : "text-teal-900",
                      "size-6 shrink-0 drop-shadow"
                    )}
                  />
                ))}
              </div>
              <a
                href={reviews.href}
                className="ml-2 text-base font-medium text-teal-200 hover:text-orange-400 underline underline-offset-2"
              >
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>

          {/* Options */}
          <form className="mt-10 space-y-8">
            {/* Colors */}
            <div>
              <h3 className="text-lg font-bold text-teal-200 mb-2">Color</h3>
              <RadioGroup
                value={selectedColor}
                onChange={setSelectedColor}
                className="flex items-center gap-x-4"
              >
                {product.colors.map((color) => (
                  <Radio
                    key={color.name}
                    value={color}
                    aria-label={color.name}
                    className={classNames(
                      color.selectedClass,
                      "relative flex cursor-pointer rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        color.class,
                        "size-10 rounded-full border-2 border-teal-400/60 shadow"
                      )}
                    />
                  </Radio>
                ))}
              </RadioGroup>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-orange-400">Size</h3>
              </div>
              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="grid grid-cols-3 gap-4 sm:grid-cols-8 lg:grid-cols-5 mt-3"
              >
                {product.sizes.map((size) => (
                  <Radio
                    key={size.name}
                    value={size}
                    disabled={!size.inStock}
                    className={classNames(
                      size.inStock
                        ? "cursor-pointer bg-teal-900/40 text-orange-400 shadow-md hover:bg-teal-700/60"
                        : "cursor-not-allowed bg-orange-400/40 text-gray-200",
                      "group relative flex items-center justify-center rounded-lg border text-base font-bold uppercase focus:outline-none data-[focus]:ring-2 data-[focus]:ring-orange-400 sm:flex-1 sm:py-4 transition"
                    )}
                  >
                    <span>{size.name}</span>
                    {size.inStock ? (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-orange-400"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-lg border-2 border-gray-200"
                      >
                        <svg
                          stroke="currentColor"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          className="absolute inset-0 size-full stroke-2 text-gray-200"
                        >
                          <line
                            x1={0}
                            x2={100}
                            y1={100}
                            y2={0}
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    )}
                  </Radio>
                ))}
              </RadioGroup>
            </div>

            {/* Add to Cart Button */}
            <button className="w-60 px-2 py-3 mt-4 rounded-xl bg-orange-500 text-white font-extrabold text-lg shadow-xl tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white drop-shadow"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
                />
              </svg>
              Add To Cart
            </button>
          </form>

          {/* Description, Highlights, Details */}
          <div className="py-10">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-teal-200 mb-2">
                Description
              </h3>
              <p className="text-base text-white/80">{product.description}</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                Highlights
              </h3>
              <ul className="list-disc space-y-2 pl-6 text-md">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-white/80">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-teal-200 mb-2">Details</h2>
              <p className="text-md text-white/80">{product.details}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Ratings Section */}
      <section className="mt-16">
        <h1 className="font-extrabold text-2xl text-orange-400 pb-6 tracking-wider text-center">
          Recent Reviews & Ratings
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
          {/* Review Cards */}
          <div className="flex flex-wrap gap-6 justify-center w-full lg:w-2/3">
            {[1, 2, 3].map((item, idx) => (
              <ProductReviewCard key={idx} />
            ))}
          </div>
          {/* Ratings Breakdown */}
          <div className="bg-[#18181b]/80 rounded-2xl shadow-xl p-8 border border-teal-400/60 min-w-[320px] max-w-sm mx-auto">
            <h1 className="text-xl font-bold text-teal-200 pb-2">
              Product Ratings
            </h1>
            <div className="flex items-center space-x-3 pb-8">
              <Rating
                name="read-only"
                value={4.6}
                precision={0.5}
                readOnly
                sx={{
                  color: "#2dd4bf",
                  "& .MuiRating-iconFilled": { color: "#2dd4bf" },
                  "& .MuiRating-iconEmpty": { color: "#fff" },
                }}
              />
              <p className="opacity-70 text-white font-semibold">
                42,807 Ratings
              </p>
            </div>
            {/* Ratings Progress Bars */}
            {[
              { label: "Excellent", value: 40, color: "success", count: 19259 },
              { label: "Very Good", value: 30, color: "success", count: 12000 },
              { label: "Good", value: 20, color: "warning", count: 8000 },
              { label: "Average", value: 7, color: "warning", count: 3000 },
              { label: "Poor", value: 3, color: "error", count: 548 },
            ].map((row, idx) => (
              <Box key={row.label} className="mb-4">
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={4}>
                    <p className="text-white/80 text-sm">{row.label}</p>
                  </Grid>
                  <Grid item xs={6}>
                    <LinearProgress
                      sx={{
                        bgcolor: "#d0d0d0",
                        borderRadius: 4,
                        height: 8,
                        "& .MuiLinearProgress-bar": {
                          bgcolor:
                            row.color === "success"
                              ? "#14b8a6"
                              : row.color === "warning"
                              ? "#fbbf24"
                              : "#f87171",
                        },
                      }}
                      variant="determinate"
                      value={row.value}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <p className="opacity-60 text-white text-xs pl-2">
                      {row.count}
                    </p>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}