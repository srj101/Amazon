import React from 'react'
import './order.css'
import moment from 'moment-js'
import momentTz from 'moment-timezone'
import CheckoutProduct from './CheckoutProduct'
function Order({order}) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{momentTz.unix(order.data.created).tz('Asia/Kolkata').format('YYYY-M-DD-H-mm-s')}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item=>(
                <CheckoutProduct
                id={item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                hideButton
                />
            ))}
        </div>
    )
}

export default Order
