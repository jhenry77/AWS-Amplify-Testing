"use client";
import React, { useState, useContext } from "react";
import styles from "./styles/catalog.module.css";
import Image from "next/image";
import CartContext from "./cart";

interface CatalogUIProps {
  songTitle: string;
  albumTitle: string;
  albumCover: string;
  price: number;
  trackId: string;
}

const CatalogUI: React.FC<CatalogUIProps> = ({ songTitle, albumTitle, albumCover, price, trackId }) => {
  const { addItem } = useContext(CartContext); // Use CartContext

  const handleAddToCart = () => {
    // Replace this with the actual item object you want to add to the cart
    const item = { songTitle, albumTitle, albumCover, price, id: trackId };
    addItem(item);
  };

  
  
  
  
  if (!songTitle || !albumTitle || !albumCover || price === undefined || !trackId) {
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
        <button className={styles.button} onClick={handleAddToCart}>Add to cart</button> {/* Add click handler */}
      </div>
    </div>
  );
}

export default CatalogUI;
