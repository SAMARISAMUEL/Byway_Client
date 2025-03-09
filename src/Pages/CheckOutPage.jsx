import React from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";
import MainNavBar from "../components/MainNavBar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import VisaImage from "/Visa.png";
import PaypalImage from "/Paypal.png";
import MentorsImage from "/image 4.png";
import star from "/Star.png";
const CheckOutPage = () => {
  return (
    <div>
      <MainNavBar />
      <main>
        <div className="flex">
          <h2>CheckOut Page</h2>
          <h3>Details</h3>
          <ChevronRight />
          <h3>Shopping Cart</h3>
          <ChevronRight />
          <h3>Checkout</h3>
        </div>
        <form action="">
          <div>
            <div>
              <label>Country</label>
              <input type="text" placeholder="Enter Country" />
            </div>
            <div>
              <label>State/Union Territory</label>
              <input type="text" placeholder="Enter State" />
            </div>
          </div>
          <h3>Payment Method</h3>
          <div>
            <input type="radio" name="" id="" />
            <p>Credit/Debit Card</p>
            <img src={VisaImage} alt="" />
          </div>
          <div>
            <p>Name of Card</p>
            <input type="text" name="" id="" placeholder="Name of Card" />
          </div>
          <div>
            <p> Card Number</p>
            <input type="text" name="" id="" placeholder="Card Number" />
          </div>
          <div>
            <div>
              <label>Expiry Date</label>
              <input type="text" placeholder="Enter Expiry Date" />
            </div>
            <div>
              <label>CVC/CVV</label>
              <input type="text" placeholder="Enter CVC/CVV" />
            </div>
          </div>
          <div>
            <input type="radio" name="" id="" />
            <p>PayPal</p>
            <img src={PaypalImage} alt="" />
          </div>
        </form>
        <div>
          <h3>Order Details</h3>
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
          </div>
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
          <Link to="/OrderComplete-Page">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckOutPage;
