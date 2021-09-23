import React, { useState, useEffect, useCallback } from 'react'
import NewOrder from '../NewOrder/NewOrder';

import Order from '../Order/Order'
import "./Home.css"



export default function Home() {

    const [orderList, setOrderList] = useState([])
    const [error, setError] = useState(null);
    const fetchDataHandler = useCallback(async () => {
        try {
            const response = await fetch(process.env.REACT_APP_BASE_API+'/orders.json')
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json()
            const loadData = []
            for (const key in data) {
                loadData.push({
                    id: data[key].id,
                    amount: data[key].amount,
                    title: data[key].title,
                    date: new Date(data[key].date)
                })

            }
            setOrderList(loadData)
        }
        catch (error) {
            setError(error.message)
        }

    }, [])
    async function addDataHandler(order) {
        const response = await fetch(process.env.REACT_APP_BASE_API+'/orders.json', {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data)
        fetchDataHandler()
    }
    useEffect(() => { fetchDataHandler() }, [fetchDataHandler])
    return (
        <div className="home-block">
            <NewOrder onAddListOrder={addDataHandler} />
            <Order data={orderList} />
            {error && <p>{error}</p>}
        </div>
    )
}
