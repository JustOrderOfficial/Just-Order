
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Box, Button, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from './ProductReviewCard.jsx'
import Grid from "@mui/material/Grid";


const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="text-white lg:px-20 py-8 px-2">
      <div className="pt-12">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-start space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-start">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-orange-500">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

      {/* product details */}
      <section className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex flex-wrap space-x-5 items-start justify-items-start pt-3">
            {[...Array(3)].map((_, index) => (
               <img
                 key={index}
                 src="/assets/images/t_shirts/black_full_tshirt.png" // Replace with additional image URLs
                 alt={`Thumbnail ${index + 1}`}
                 className="w-20 h-20 object-cover rounded-lg cursor-pointer border hover:border-gray-400"
               />
             ))}
        
             
      </div>

           
          </div>

            {/* Product info */}
        <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8
        lg:pb-24 ">
          <div className="lg:col-span-2 text-start ">
            <h1 className="text-lg lg:text-xl font-semibold text-white">
              Universaloutfit</h1>
            <h1 className='text-lg lg:text-xl text-gray-400 pt-1'>  
            Casual Puff Sleevs Solid Women White Top
            </h1>
          </div>
           

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0 text-start">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-white">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-orange-500' : 'text-gray-200',
                        'size-5 shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-white hover:text-orange-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div className='text-start'>
                <h3 className="text-lg text-white">Color</h3>

                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
                    {product.colors.map((color) => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={classNames(
                          color.selectedClass,
                          'relative -m-0.5 flex cursor-pointer justify-items-start justify-start rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(color.class, 'size-8 rounded-full border border-black/10')}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-orange-500">Size</h3>
                  {/* <a href="#" className="text-lg font-medium text-orange-600 hover:text-orange-500">
                    Size guide
                  </a> */}
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="grid grid-cols-3 gap-6 sm:grid-cols-8 lg:grid-cols-5"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={classNames(
                          size.inStock
                            ? 'cursor-pointer bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-orange-500 shadow-sm'
                            : 'cursor-not-allowed bg-orange-500 text-gray-200',
                          'group relative flex items-center justify-center rounded-md border text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-orange-500 sm:flex-1 sm:py-6',
                        )}
                      >
                        <span>{size.name}</span>
                        {size.inStock ? (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-orange-500"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              stroke="currentColor"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0 size-full stroke-2 text-gray-200"
                            >
                              <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                            </svg>
                          </span>
                        )}
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                 
                  className='w-60 px-2 py-2 mt-8 rounded-lg bg-orange-500 text-white hover:bg-orange-600'
                  sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                >
                  Add To Cart
                </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1  lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6 text-start">
                <p className="text-base text-gray-400">{product.description}</p>
              </div>
            </div>

            <div className="mt-10 text-start">
              <h3 className="text-lg font-medium text-white">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-md">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 justify-items-start">
              <h2 className="text-lg font-medium text-white">Details</h2>

              <div className="mt-4 space-y-6 text-start">
                <p className="text-md text-gray-400">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
        </section>

      {/* Reviews  and Ratings*/}
      {/* <section>
        <h1 className='font-semibold text-lg pb-4 text-start'>Recent Review & Rating</h1>

        <div className='border p-5'>
            <Grid2 container spacing={7}>
                  <Grid2 items xs={7}>
                    <div className='space-y-5'>
                      {[1,1,1].map((item) =><ProductReviewCard/>)}
                    </div>
                  </Grid2>
            </Grid2>

            <Grid2 item xs={5}>
              <h1 className='text-xl font-semibold pb-1'>Product Ratings</h1>

              <div className='flex flex-col items-center space-x-3'>
                <Rating value={4.6} readOnly precision={.5}/>
                <p className='opacity-60'>54890 Ratings</p>
              </div>

              <Box className='mt-5'>
                <Grid2 container  alignItems={'center'} gap={2}>
                  <Grid2 item xs={2}>
                    <p>Excellent</p>
                  </Grid2>
                  <Grid2 item xs={7}>
                    <LinearProgress sx={{bgColor: '#d0d0d0', borderRadius:4,height:7}}variant="determinate" value={40} color='success' />
                  </Grid2>
                </Grid2>
                <Grid2 container  alignItems={'center'} gap={2}>
                  <Grid2 item xs={2}>
                    <p>Excellent</p>
                  </Grid2>
                  <Grid2 item xs={7}>
                    <LinearProgress sx={{bgColor: '#d0d0d0', borderRadius:4,height:7}}variant="determinate" value={40} color='success' />
                  </Grid2>
                </Grid2>
                <Grid2 container  alignItems={'center'} gap={2}>
                  <Grid2 item xs={2}>
                    <p>Excellent</p>
                  </Grid2>
                  <Grid2 item xs={7}>
                    <LinearProgress sx={{bgColor: '#d0d0d0', borderRadius:4,height:7}}variant="determinate" value={40} color='success' />
                  </Grid2>
                </Grid2>
                <Grid2 container  alignItems={'center'} gap={2}>
                  <Grid2 item xs={2}>
                    <p>Excellent</p>
                  </Grid2>
                  <Grid2 item xs={7}>
                    <LinearProgress sx={{bgColor: '#d0d0d0', borderRadius:4,height:7}}variant="determinate" value={40} color='success' />
                  </Grid2>
                </Grid2>
                <Grid2 container  alignItems={'center'} gap={2}>
                  <Grid2 item xs={2}>
                    <p>Excellent</p>
                  </Grid2>
                  <Grid2 item xs={7}>
                    <LinearProgress sx={{bgColor: '#d0d0d0', borderRadius:4,height:7}}variant="determinate" value={40} color='success' />
                  </Grid2>
                </Grid2>
                <Grid2 container  alignItems={'center'} gap={2}>
                  <Grid2 item xs={2}>
                    <p>Excellent</p>
                  </Grid2>
                  <Grid2 item xs={7}>
                    <LinearProgress sx={{bgColor: '#d0d0d0', borderRadius:4,height:7}}variant="determinate" value={40} color='success' />
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
          </div>
      </section> */}
         <section className="">
          <h1 className="font-semibold text-lg pb-4">
            Recent Review & Ratings
          </h1>

          <div className=" p-5">
            <Grid container spacing="60%">
                  <Grid >
                    <div className='space-y-5'>
                      {[1,1,1].map((item) =><ProductReviewCard/>)}
                    </div>
                  </Grid>

              <Grid className="justify-items-start">
                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                <div className="flex items-center space-x-3 pb-10">
                  <Rating
                    name="read-only"
                    value={4.6}
                    precision={0.5}
                    readOnly
                  />

                  <p className="opacity-60">42807 Ratings</p>
                </div>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid >
                      <p className="p-0">Excellent</p>
                    </Grid>
                    <Grid >
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={40}
                        color="success"
                      />
                    </Grid>
                    <Grid>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Very Good</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className="bg-green-600"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={30}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="right"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Good</p>
                    </Grid>
                    <Grid xs={7}>
                      {/* <LinearProgress
                        className="bg-[#885c0a]"
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, "& .MuiLinearProgress-bar": {
                          bgcolor: "success.main", // or "orange.main" for the orange progress bar
                        }, }}
                        variant="determinate"
                        value={40}
                        width="100%"
                        // color="orange"
                      /> */}
                      <LinearProgress/>
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Avarage</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                          "& .MuiLinearProgress-bar": {
                            bgcolor: "#885c0a", // stroke color
                          },
                        }}
                        variant="determinate"
                        value={20}
                        color="success"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                  >
                    <Grid xs={2}>
                      <p className="p-0">Poor</p>
                    </Grid>
                    <Grid xs={7}>
                      <LinearProgress
                        className=""
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={10}
                        color="warning"
                      />
                    </Grid>
                    <Grid xs={2}>
                      <p className="opacity-50 p-2">19259</p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </div>
  )
}
