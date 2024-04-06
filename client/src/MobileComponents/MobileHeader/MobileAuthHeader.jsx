import React from "react";
import styles from "./MobileHeader.module.css";
import logo from "/images/logo.svg";

const MobileAuthHeader = () => {
  return (
    <>
      <div className={styles.header_container}>
      <div className={styles.logo_container}>
          <img src={logo} alt="logo" />
          <h2>Musicart</h2>
        </div>
      </div>
    </>
  );
};

export default MobileAuthHeader;
