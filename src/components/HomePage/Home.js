import React,{useState} from 'react'
import NewOrder from '../NewOrder/NewOrder';

import Order from '../Order/Order'
import "./Home.css"


const data = [
    {
        id: '1',
        title: 'Math',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { 
        id: '2', 
        title: 'Python in Nullsell', 
        amount: 799.49, 
        date: new Date(2021, 2, 12) 
    },
    {
        id: '3',
        title: 'NhaGiaKim',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: '4',
        title: 'Tuoi20',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

export default function Home() {
    const [orderList,setOrderList] = useState(data)

    const addNewIntoList = (neworder) =>{
        setOrderList((preNew) =>{
            console.log(preNew)
            return [neworder, ...preNew]
        })
    }
    return (
        <div className = "home-block">
            <NewOrder onAddListOrder = {addNewIntoList}/>
            <Order data = {orderList}/>
        </div>
    )
}
