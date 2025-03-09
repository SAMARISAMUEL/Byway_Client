import React from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";
import MainNavBar from "../components/MainNavBar";
import OrderComplete from "/public/OrderComplete.png";
const OrderCompletePage = () => {
  return (
    <div>
      <MainNavBar />
      <main>
        <div>
          <img src={OrderComplete} alt="" />
          <h1>Order Complete!</h1>
          <p>You Will Receive a confirmation email soon! </p>
          <Link to="/">Return to Homepage</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderCompletePage;
