import React from 'react'
import styles from "./Banner.module.css";

import banner from "/images/banner.svg";
export default function BannerSlider() {
  return (
    <div className={styles.banner_Image_container}>

          <div className={styles.product_img} >
            <img src={banner} alt="banner" />
          </div>

    </div>
  );
}
