import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/Slices/authSlice";

import styles from "./MobileFooter.module.css";
import homeIcon from "/images/icons8-home-50.png";
import cartIcon from "/images/cartIcon.png";
import invoiceIcon from "/images/invoice.svg";
import userIcon from "/images/icons8-user-50.png";

import Swal from "sweetalert2";

const MobileFooter = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (item) => {
    setActiveMenu(item);
  };

  const gotToCart = () => {
    if (user) {
      navigate("/cart");
    } else {
      Swal.fire({
        icon: "error",
        title: "You are not logged in!",
        text: "Please login first!",
      });
      navigate("/login");
    }
  };

  return (
    <div className={styles.mobile_footer_container}>
      <Link to="/">
        <div
          className={`${styles.btn} ${
            activeMenu === "home" ? `${styles.active}` : ""
          }`}
        >
          <img src={homeIcon} alt="homeIcon" />
          <p>Home</p>
        </div>
      </Link>

      <div
        onClick={() => {
          handleMenuClick("cart");
          gotToCart();
        }}
        className={`${styles.btn} ${
          activeMenu === "cart" ? `${styles.active}` : ""
        }`}
      >
        <img src={cartIcon} alt="cartIcon" />
        <p>Cart</p>
      </div>

      <div
        onClick={() => {
          handleMenuClick("invoice");
        }}
        className={`${styles.btn} ${
          activeMenu === "invoice" ? `${styles.active}` : ""
        }`}
      >
        {/* Your new button goes here */}
        <img src={invoiceIcon} alt="profileIcon" />
        <p>Invoice</p>
      </div>

      <div
        onClick={() => {
          handleMenuClick("user");
        }}
        className={`${styles.btn} ${
          activeMenu === "user" ? `${styles.active}` : ""
        }`}
      >
        <img
          onClick={() => {
            Swal.fire({
              title: user
                ? "Are you sure you want to logout?"
                : "Are you sure you want to login?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#2fca08",
              cancelButtonColor: "#d33",
              confirmButtonText: user ? "Yes, Logout!" : "Yes, Login!",
            }).then((result) => {
              if (result.isConfirmed) {
                user ? dispatch(logoutUser()) : "";

                navigate("/login");
              }
              handleMenuClick("user");
            });
          }}
          src={userIcon}
          alt="userIcon"
        />
        {user ? <p>Logout</p> : <p>Login</p>}
      </div>
    </div>
  );
};

export default MobileFooter;
