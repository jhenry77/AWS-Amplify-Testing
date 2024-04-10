"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./styles/catalog.module.css";
import Image from "next/image";
import CartContext from "./cart";
import { useAuthenticator } from '@aws-amplify/ui-react';

interface CatalogUIProps {
  songTitle: string;
  albumTitle: string;
  albumCover: string;
  price: number;
  trackId: string;
}

const CatalogUI: React.FC<CatalogUIProps> = ({ songTitle, albumTitle, albumCover, price, trackId }) => {
  const { cart, addItem } = useContext(CartContext); // Use CartContext
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // Check if the item is already in the cart on component mount and any time cart changes
    const itemInCart = cart.some(item => item.id === trackId);
    setIsAdded(itemInCart);
  }, [cart, trackId]);

  const { user } = useAuthenticator((context) => [context.user]); // Assuming this gives you the current user

  const handleAddToCart = () => {
    if (!user) {
      alert('Please sign in to add items to your cart');
      return;
    }

    const item = { songTitle, albumTitle, albumCover, price, id: trackId };
    addItem(item);
    setIsAdded(true); // Assume item is added successfully
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
        <button
          className={`${styles.button} ${isAdded ? styles.addedToCart : ''}`}
          onClick={handleAddToCart}
        >
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default CatalogUI;
