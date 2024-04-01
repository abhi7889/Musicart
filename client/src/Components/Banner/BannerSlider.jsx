import React from "react";
import styles from "./Banner.module.css";

import banner from "/images/girl.svg";
export default function BannerSlider() {
  return (
    <div className={styles.banner_Image_container}>
      <div className={styles.product_img}>
        <div className={styles.bannerBackground}>
          <h1 style={{fontSize:'65.59px'}}>Grab upto 50% off on Selected headphones</h1>
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
}
