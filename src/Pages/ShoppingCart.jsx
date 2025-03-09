import React from "react";
import MainNavBar from "../components/MainNavBar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import MentorsImage from "/image 4.png";
import star from "/Star.png";
import Footer from "../components/Footer";
import { Link } from "react-router";
const ShoppingCart = () => {
  return (
    <div>
      <MainNavBar />
      <main>
        <div className="flex">
          <h2>Shopping cart</h2>
          <h3>Categories</h3>
          <ChevronRight />
          <h3>Details</h3>
          <ChevronRight />
          <h3>Shopping Cart</h3>
        </div>
        <div>
          {" "}
          <div>
            <h4>1 Course in cart</h4>
            <div>
              <img src={MentorsImage} alt="" />
              <div>
                <div>
                  <p>Introduction to User Experience Design</p>
                  <p>$149.9</p>
                </div>
                <p>By John Doe</p>
                <div className="">
                  <img src={star} alt="Star rating" />
                  <span>(1200 Ratings)</span>
                </div>
                <p className="text-[12px] mt-1 ms-3">
                  22 Total Hours. 155 Lectures. Beginner
                </p>
                <p>Save for later</p>
                <span>Remove</span>
              </div>
            </div>
            <div>
              <img src={MentorsImage} alt="" />
              <div>
                <div>
                  <p>Introduction to User Experience Design</p>
                  <p>$149.9</p>
                </div>
                <p>By John Doe</p>
                <div className="">
                  <img src={star} alt="Star rating" />
                  <span>(1200 Ratings)</span>
                </div>
                <p className="text-[12px] mt-1 ms-3">
                  22 Total Hours. 155 Lectures. Beginner
                </p>
                <p>Save for later</p>
                <span>Remove</span>
              </div>
            </div>
            <div>
              <img src={MentorsImage} alt="" />
              <div>
                <div>
                  <p>Introduction to User Experience Design</p>
                  <p>$149.9</p>
                </div>
                <p>By John Doe</p>
                <div className="">
                  <img src={star} alt="Star rating" />
                  <span>(1200 Ratings)</span>
                </div>
                <p className="text-[12px] mt-1 ms-3">
                  22 Total Hours. 155 Lectures. Beginner
                </p>
                <p>Save for later</p>
                <span>Remove</span>
              </div>
            </div>
          </div>
          <div>
            <h3>Order Details</h3>
            <div>
              <div>
                <h3>Price</h3>
                <p>$300.0</p>
              </div>
              <div>
                <h3>Discount</h3>
                <p>-$30.0</p>
              </div>
              <div>
                <h3>Tax</h3>
                <p>$10.0</p>
              </div>
              <div>
                <h3>Total</h3>
                <p>$270.0</p>
              </div>
            </div>
            <Link to="/CheckOut-Page">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
