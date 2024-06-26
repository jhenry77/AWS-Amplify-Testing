import React, { useContext, useState, useEffect } from 'react';
import CartContext from './cart'; // Import CartContext
import styles from '../components/styles/cartUi.module.css';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import {createUser, createSponsorApplication, updateUserSponsor, createPurchase, createPurchaseItem} from "../../src/graphql/mutations"
import { getSponsorApplication, getUser, listSponsorApplications, listTodos, listUsers, listUserSponsors } from '../../src/graphql/queries';
import config from '@/src/amplifyconfiguration.json';
import { UserPointsContext } from './pointsContext';

import { fetchAuthSession } from "aws-amplify/auth";


Amplify.configure(config);

const client = generateClient();
// const [userId, setUserId] = useState(0); // State to control dropdown



function CartUi() {
  const {userPoints, updateUserPoints} = useContext(UserPointsContext)
const [userSponsor, setUserSponsor] = useState(null);
const [userId, setUserId] =useState(null);
const [userSponsorId, setUserSponsorId] = useState(String);

  useEffect(() => {
    fetchAuthSession({ forceRefresh: true })
    .then(({ tokens }) => {
        const idToken = tokens?.idToken as any;
        const id = idToken.payload["sub"];
        setUserId(id);
        console.log("USer id is", id);
    })
    .catch(err => {
        console.log(err);
    });
}, [])

  useEffect(() =>{
    if (userId){
      console.log("about to call getUser");
        client.graphql({ query: getUser, 
            variables: {
                  id: userId
            }
        })
        .then(result => {
          console.log("got this userSponsor")
            console.log(result);
            if (result.data.getUser && result.data.getUser.sponsors?.items) {
              console.log(result.data.getUser.sponsors);
              const sponsorId = result.data.getUser.sponsors.items[0].id;
              const points = result.data.getUser.sponsors.items[0].points;
              updateUserPoints(points);
              setUserSponsorId(sponsorId);

            }
        })
        .catch(error => {
          console.log("error fetching user"); 
            console.error( error);
        });
      }
  }, [userId])


  const { cart, removeItem, clearCart } = useContext(CartContext); // Use CartContext
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle dropdown
  };
  const handleRemoveFromCart = (id: any) => {
    removeItem(id);
  };
  const totalCost = cart.reduce((total, item) => total + item.price, 0);


  function removePoints(points:number, cart:any) {

    const newPoints = userPoints - points;
    let totalAmount = 0;

    // Calculate total amount
    cart.forEach((item: any) => {
        totalAmount += item.price;
    });
    // Create a Purchase
    client.graphql({
        query: createPurchase,
        variables: {
            input: {
                userSponsorId: userSponsorId,
                purchaseDate: new Date().toISOString(),
                totalAmount: totalAmount
            }
        }
    })
    .then((purchaseResult) => {
        const purchaseId = purchaseResult.data.createPurchase.id;

        // Create PurchaseItems for each item in the cart
        const purchaseItemsPromises = cart.map((item: any) => {
          console.log(item);
            return client.graphql({
                query: createPurchaseItem,
                variables: {
                    input: {
                        purchaseId: purchaseId,
                        itemName: item.songTitle,
                        itemId: item.id,
                        price: item.price
                    }
                }
            });
        });

        return Promise.all(purchaseItemsPromises);
    })
    .then(() => {
        // Update UserSponsor points
        console.log("Now were trying to update the usersponsors points")
        return client.graphql({
            query: updateUserSponsor,
            variables: {
                input: {
                    id: userSponsorId,
                    points: newPoints
                }
            }
        });
    })
    .then(() => {
        updateUserPoints(newPoints);
        clearCart();
    })
    .catch(error => console.error('Error removing points:', error));
}


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
            Number of items in the cart: {cart.length}<br></br>
            Total cost: {totalCost}<br></br>
            Balance after purchase: {userPoints - totalCost}
            <button className={styles["purchaseButton"]} onClick={() => removePoints( totalCost, cart)}>Purchase</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartUi;