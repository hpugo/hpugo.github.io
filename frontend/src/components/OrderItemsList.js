import React from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import classes from '../components/css/orderitemlist.module.css'
export default function OrderItemsList({ order }) {
  return (
    <table className={classes.table}>
      <tbody>
        <tr>
          <td colSpan="5">
            <h3>Order Items:</h3>
          </td>
        </tr>
        {order.items.map(item => (
          <tr key={item.shoe.id}>
            <td>
              <Link to={`/shoe/${item.shoe.id}`}>
                <img src={item.shoe.imageUrl} />
              </Link>
            </td>
            <td>{item.shoe.name}</td>
            <td>
              <Price price={item.shoe.price} />
            </td>
            <td>{item.quantity}</td>
            <td>
              <Price price={item.price} />
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan="3"></td>
          <td>
            <strong>Total :</strong>
          </td>
          <td>
            <Price price={order.totalPrice} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}