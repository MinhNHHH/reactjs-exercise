import React from 'react'
import OrderDate from './OrderDate'
import './OrderItem.css'
export default function OrderItem(props) {

    return (
        <div className="order-item">
            <OrderDate date={props.date} />
            <div className="order-item_description">
                <h2>{props.title}</h2>

                <div className="order-item_amount">${props.amount}</div>
            </div>

        </div>
    )
}
