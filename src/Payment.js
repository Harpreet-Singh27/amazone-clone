import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { Link } from 'react-router-dom';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>Checkout {<Link to='/checkout'>{basket?.length} items</Link>}</h1>
        {/* Delivery Address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__Address'>
            <p>{user?.email}</p>
            <p>123 React lane</p>
            <p>Los Angeles,CA</p>
          </div>
        </div>
        {/* Review Items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and Delivery</h3>
          </div>
          <div className='payment__items'>
            {/* Products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.tile}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>{/* Strip magic will go */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
