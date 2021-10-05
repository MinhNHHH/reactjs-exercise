import React from 'react'
import './OrderDate.css'


export default function OrderDate(props) {
    const month = props.date.toLocaleString('en-US',{ month: 'long'})
    const day = props.date.toLocaleString('en-UD', {day : '2-digit'})
    const year = props.date.getFullYear();
    return (
        <div className = "order-date">
            <div className = "order-date_month">{month}</div>
            <div className = "order-date_year">{year}</div>
            <div className = "order-date_day">{day}</div>
        </div>
    )
}
