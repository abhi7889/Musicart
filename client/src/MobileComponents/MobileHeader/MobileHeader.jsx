import React from "react";
import styles from "./MobileHeader.module.css";
import logo from "/images/logo.svg";
import { useSelector } from "react-redux";
import usersIcon from "/images/icons8-group-32.png";

const MobileHeader = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.header_div}>
        <div className={styles.logo_container}>
          <img src={logo} alt="logo" />
          <h2>Musicart</h2>
        </div>

        </div>
      </div>
    </>
  );
};

export default MobileHeader;
