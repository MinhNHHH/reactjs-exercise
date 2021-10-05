import React from 'react'
import NewOrderForm from './NewOrderForm'
import "./NewOrder.css"


export default function NewOrder(props) {
    const saveOrderData = data => {
        const orderData = {
            ...data,
            id: Math.random().toString()
        };
        props.onAddListOrder(orderData)
    }
    return (
        <div className="new-order">
            <NewOrderForm onSaveOrder={saveOrderData} />
        </div>
    )
}
