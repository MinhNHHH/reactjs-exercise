import React, { useState } from 'react'
import './NewOrderForm.css'

export default function NewOrderForm(props) {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')
    const titleHandle = e => {
        setEnterTitle(e.target.value)
    }
    const amountHandle = e => {
        setEnterAmount(e.target.value)
    }
    const dateHandle = e => {
        setEnterDate(e.target.value)
    }
    const onSubmit = e => {
        e.preventDefault()

        const order = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }
        props.onSaveOrder(order)
        props.hidden()
        setEnterTitle('')
        setEnterAmount('')
        setEnterDate('')
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="new-order-form">
                <div className="new-order-form_input">
                    <label>Title</label>
                    <input type="text" value={enterTitle} onChange={titleHandle} />
                </div>
                <div className="new-order-form_input">
                    <label>Price</label>
                    <input type="number" onChange={amountHandle} value={enterAmount} />
                </div>
                <div className="new-order-form_input">
                    <label>Date</label>
                    <input type="date" value={enterDate} onChange={dateHandle} />
                </div>
            </div>
            <div className="new-order-form-btn">
                <button type="submit">Add New Order</button>
            </div>
        </form>
    )
}
