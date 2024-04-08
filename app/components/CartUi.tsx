import React, { useContext, useState } from 'react';
import CartContext from './cart'; // Import CartContext
import styles from '../components/styles/cartUi.module.css'

function CartUi() {
  const { cart, removeItem } = useContext(CartContext); // Use CartContext
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle dropdown
  };
  const handleRemoveFromCart = (id: any) => {
    console.log("cart is");
    console.log(cart);
    console.log("id is :")
    console.log(id);
    removeItem(id);
  };

  return (
    <div className={styles["dropButton"]}>
      <button onClick={handleToggle}>
      Cart▼ ({cart.length} items)
      </button>

      {isOpen && ( // Only render this part if isOpen is true
        <div className={styles.dropdown}>
          <div className={styles.container}>
            {cart.map((item, index) => (
              <div className={styles['details']} key={index}>
                <h2 className={styles.songTitle}>{item.songTitle}</h2>
                <h3 className={styles.albumTitle}>{item.albumTitle}</h3>
                <img className={styles.albumCover} src={item.albumCover} alt={item.albumTitle} />
                <p>{item.price}</p>
                <button className='justify-end' onClick={() => handleRemoveFromCart(item.id)}>🗑️(Remove)</button>
              </div>
            ))}
          </div>
          <div className={styles.purchaseInfo}>
            This is your purchase info!
            {/* Add your purchase information here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartUi;