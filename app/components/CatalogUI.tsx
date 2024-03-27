"use client";
import React, { useState } from "react";
import styles from "./styles/catalog.module.css";
import Image from "next/image";



function CatalogUI(){

    

  return (
    <div className={styles.container}>
      
      <div className={styles.details}>
        <h2 className={styles.songTitle}>song title</h2>
        <p className={styles.albumTitle}>albmum title</p>
      </div>
      <Image
          src="/teamlogo.jpg"
          alt="Team Photo"
          width={200}
          height={200}
          className={styles.albumCover}
        />
        <div className={styles.bottom}>
          <p className={styles.price}>$price</p>
          <button className={styles.button}>Add to cart</button>
        </div>
    </div>
   













    // <div className = {styles['uiBox']}>
    //     <div className = {styles['songTitle']}>
    //         Name of song
    //     </div>
    //     <div className = {styles['songAlbum']}>
    //         Price to buy
    //     </div>
    //     <Image
    //       src="/teamlogo.jpg"
    //       alt="Team Photo"
    //       width={200}
    //       height={200}
    //       className="mx-auto"
    //     />

    // </div>
   
  );
}

export default CatalogUI;
