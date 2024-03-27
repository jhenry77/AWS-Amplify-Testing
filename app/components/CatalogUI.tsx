"use client";
import React, { useState } from "react";
import styles from "./styles/catalog.module.css";
import Image from "next/image";

interface CatalogUIProps {
  songTitle: string;
  albumTitle: string;
  albumCover: string;
  price: number;
}

const CatalogUI: React.FC<CatalogUIProps> = ({ songTitle, albumTitle, albumCover, price }) => {
  if (!songTitle || !albumTitle || !albumCover || price === undefined) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2 className={styles.songTitle}>{songTitle}</h2>
        <p className={styles.albumTitle}>{albumTitle}</p>
      </div>
      <Image
        src={albumCover}
        alt="Album Cover"
        width={200}
        height={200}
        className={styles.albumCover}
      />
      <div className={styles.bottom}>
        <p className={styles.price}>${price}</p>
        <button className={styles.button}>Add to cart</button>
      </div>
    </div>
  );
}

export default CatalogUI;
