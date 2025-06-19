

import React from 'react';
import HomeCarosal from '../../component/homeCarosal/HomeCarosal.jsx';
import HeroSection from '../../component/heroSection/HeroSection.jsx'
import Testimonial from "../../component/testimonial/Testimonial.jsx";
import HomePremiumProduct from "../../component/HomePremiumProduct/HomePremiumProduct.jsx";
import Marquee from '../../component/Marquee/marquee.jsx';
import HomeAllProducts from "../../component/Product/HomeAllProducts.jsx";
import HomeBestSellerProduct from "../../component/Product/HomeBestSellerProduct.jsx";
import HomeNewArrival from "../../component/Product/HomeNewArrival.jsx";
import OfferCard from '../../component/Product/HomeOffer.jsx';
import ProductDetails from '../../component/ProductDetails/ProductDetails.jsx';
import AddressCard from '../../component/Address/AddressCard.jsx';
import Footer1 from '../../component/Footer1.jsx';
// import { products } from '../../component/Product/Products';



const HomePage = () => {
  return (
    <div className=" text-white bg-gradient-to-br from-[#0d1117] to-[#111827] font-sans">
     
        {/* Hero Section */}
        <section className=" w-full max-w-[1440px] mx-auto rounded-lg p-6 mb-8 px-4">
          <HeroSection />
        </section>
        {/* Product Section */}
        {/* <section className="flex px-4 mt-4 mb-10 justify-center">
          <HomePremiumProduct />
        </section> */}

        {/* Home Best Seller Product */}
        <section className=" w-full max-w-[1440px] mx-auto my-12 px-4">
          <HomeBestSellerProduct />
        </section>

        {/* Home Marqee */}
        <section className="w-full max-w-[1440px] mx-auto my-10">
          <Marquee />
        </section>

        {/* Home New Arrival */}
        <section className=" w-full max-w-[1440px]   mx-auto my-10 px-4">
          <HomeNewArrival />
        </section>

        {/* Home All Product */}
        <section className=" w-full max-w-[1440px]  mx-auto my-10 px-4">
          <HomeAllProducts />
        </section>

        {/* Home Offer */}
        <section className=" w-full max-w-[1440px] mx-auto my-10 px-4">
          <OfferCard />
        </section>

        {/* Carousel at the Bottom */}
        {/* <section className="px-4">
        <AddressCard />
      </section> */}

        {/* Testimonials */}
        {/* <section className="w-full max-w-[1440px] mx-auto my-10 px-4">
        <h2 className="text-center text-3xl font-bold mb-6"></h2>
        <Testimonial />
      </section> */}

        {/* <main className="container mx-auto px-4 py-8">
                <ProductCarousel products={products} />
            </main> */}
        {/* <ProductCarousel/> */}

      {/* <ProductDetails /> */}
      <Footer1/>
      </div>
    
  );
};

export default HomePage;
