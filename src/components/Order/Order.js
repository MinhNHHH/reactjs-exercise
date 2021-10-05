import React from 'react'
import OrderItem from './OrderItem';
import './Order.css'

export default function Order(props) {
    return (
        <div className = "order">
            {
                props.data.map((order) => (
                    <OrderItem
                        key = {order.id} 
                        date = {order.date} 
                        title = {order.title} 
                        amount = {order.amount}
                    />
                ))
            }
        </div>
    )
}
