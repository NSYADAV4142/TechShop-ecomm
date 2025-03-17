import React from "react";
import { Link } from "react-router-dom";
import { BiCubeAlt } from "react-icons/bi";
import { CiHome } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { LuRectangleHorizontal } from "react-icons/lu";

const Home = () => {
  return (
    <>
      <nav className="sticky shadow-lg bg-white py-4">
        <div className="flex justify-between">
          <div className="flex text-xl font-bold ml-35 gap-2">
            <div className="text-3xl text-blue-700">
              <BiCubeAlt />
            </div>
            TechShop
          </div>

          <div className="flex justify-end gap-7 mr-38 pt-1">
            <Link to="/" className="flex gap-2">
              <div className="text-2xl text-black">
                <CiHome />
              </div>
              Home
            </Link>
            <Link to="/products" className="flex gap-3">
              <div className="text-2xl text-black">
                <BiCubeAlt />
              </div>
              Products
            </Link>
            <Link to="/Gallery" className="flex gap-3">
              <div className="text-xl text-black">
                <GrGallery />
              </div>
              Gallery
            </Link>
            <Link to="/contact" className="flex gap-3">
              <div className="text-xl text-black">
                <IoCallOutline />
              </div>
              Contact
            </Link>
            <Link to="/Cart" className="flex gap-3">
              <div className="text-xl text-black">
                <FiShoppingCart />
              </div>
              Cart
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-row">
        <section className="bg-[url('https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200')] h-104 bg-no-repeat bg-cover bg-center text-center  mx-auto ">
        <div className="h-104 bg-no-repeat bg-cover bg-center text-center  mx-auto  bg-gray-800 opacity-80 px-4 py-24">
         <div className="max-w-3xl mx-auto">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Welcome to <span className="text-indigo-400">TechShop</span>
          </h1>
          <p className="text-xl md:text text-white mb-8">
            Discover the latest in tech gadgets and accessories. Shop our
            curated collection of premium products.
          </p>
          <div className="justify-center space-x-4">
            <a
              className="inline-flex items-center px-8 py-3 border border-transparent  text-base font-medium rounded-md text-white bg-indigo-600 gap-2 hover:bg-indigo-700"
              href=""
            >
              Shop Now{" "}
              <span className="pt-1">
                <FaArrowRight />
              </span>
            </a>
            <a
              className="inline-flex items-center px-8 py-3 border border-white  text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900"
              href=""
            >
              View Gallery
            </a>
          </div>
         </div>
         </div>
        </section>

        <section className="py-16 px-30 bg-white">
          <div className="px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center gap-1 space-x-4 p-6  bg-gray-50 rounded-lg ">
                <span className="flex text-4xl text-indigo-600">
                  <BsTruck />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Shipping</h3>
                  <p className="text-gray-600">On orders over $100</p>
                </div>
              </div>

              <div className="flex items-center gap-1 space-x-4 p-6  bg-gray-50 rounded-lg">
                <span className="flex text-4xl text-indigo-600">
                  <RiSecurePaymentFill />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Secure Payment
                  </h3>
                  <p className="text-gray-600">100% secure payment</p>
                </div>
              </div>

              <div className="flex items-center gap-1 space-x-4 p-6  bg-gray-50 rounded-lg">
                <span className="flex text-4xl text-indigo-600">
                  <FaRegClock />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600">Dedicated support</p>
                </div>
              </div>

              <div className="flex items-center gap-1 space-x-4 p-6  bg-gray-50 rounded-lg">
                <span className="flex text-4xl text-indigo-600">
                  <LuRectangleHorizontal />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">Easy Returns</h3>
                  <p className="text-gray-600">30 day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="mt-4 text-gray-600">Check out our most popular items</p>
            </div>
            <div className="grid grid-cols-3 gap-8">

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
