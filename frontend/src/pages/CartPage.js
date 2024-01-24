import React from "react";
import classes from '../components/css/cartpage.module.css';
import { useCart } from "../hooks/useCart";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import Price from "../components/Price";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" />
      {cart && cart.items.length > 0 && (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map(item => (
              <li key={item.shoe.id}>
                <div>
                  <img 
                    src={`/shoes/${item.shoe.imageUrl}`}
                    alt={item.shoe.name}
                  />
                </div>
                <div>
                  <Link to={`/shoes/${item.shoe.id}`}>{item.shoe.name}</Link>
                </div>
                
                <div>
                  <select value={item.quantity} >
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div>
                  <Price price={item.price} />
                </div>
                <div>
                  <button className={classes.remove_button}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className={classes.checkout}>
              <div className={classes.shoes_count}>{cart.totalCount}</div>
              <div className={cart.totalPrice}>
                <Price price={cart.totalPrice} />
              </div>
               <Link to="/checkout"> To checkout</Link>
          </div>    
        </div>
      )}
    </>
  );
}
