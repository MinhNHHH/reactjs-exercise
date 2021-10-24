import React, { useState, useEffect, useCallback } from 'react'
import useHttp from '../../api/use-https';
import NewOrder from '../NewOrder/NewOrder';

import Order from '../Order/Order'
import Modal from '../UI/Modal';
import "./Home.css"



export default function Home() {

    const [orderList, setOrderList] = useState([])
    //const [error, setError] = useState(null);
    const { error, sendRequest: fetchData } = useHttp()
    const [onHidden, setOnHidden] = useState(false)
    // useEffect( () => {
    //     const tranformData = (objects) =>{
    //         const loadData = []
    //         for (const key in objects) {
    //             loadData.push({
    //                 id: objects[key].id,
    //                 amount: objects[key].amount,
    //                 title: objects[key].title,
    //                 date: new Date(objects[key].date)
    //             })
    //         }
    //         setOrderList(loadData)
    //     }
    //     fetchData({ url: process.env.REACT_APP_BASE_API+'/orders.json'},tranformData)
    // }, [fetchData]
    // )
    const fetchDataHandler = () => {
        const tranformData = (objects) => {
            const loadData = []
            for (const key in objects) {
                loadData.push({
                    id: objects[key].id,
                    amount: objects[key].amount,
                    title: objects[key].title,
                    date: new Date(objects[key].date)
                })
            }
            setOrderList(loadData)
        }
        fetchData({ url: process.env.REACT_APP_BASE_API + '/orders.json' }, tranformData)
    }
    useEffect(fetchDataHandler, [fetchData])
    // const fetchDataHandler = useCallback(async () => {
    //     try {
    //         const response = await fetch(process.env.REACT_APP_BASE_API+'/orders.json')
    //         if (!response.ok) {
    //             throw new Error('Something went wrong!');
    //         }
    //         const data = await response.json()
    //         const loadData = []
    //         for (const key in data) {
    //             loadData.push({
    //                 id: data[key].id,
    //                 amount: data[key].amount,
    //                 title: data[key].title,
    //                 date: new Date(data[key].date)
    //             })

    //         }
    //         setOrderList(loadData)
    //     }
    //     catch (error) {
    //         setError(error.message)
    //     }

    // }, [])
    const children = (

        <div className = "modal-header">
            <div className = "modal-header-icon"></div>
        </div>

    )


    async function addDataHandler(order) {
        const response = await fetch(process.env.REACT_APP_BASE_API + '/orders.json', {
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

    const turnOnHandler = () => {
        setOnHidden(true)
    }
    const turnOffHandler = () => {
        setOnHidden(false)
    }
    return (
        <div className="home-block">
            <NewOrder onAddListOrder={addDataHandler} onHiddenModal={turnOnHandler} />
            {onHidden && <Modal>
                {children}
                <button className = ""onClick = {turnOffHandler}>Close</button>
            </Modal>}

            <Order data={orderList} />
            {error && <p>{error}</p>}
        </div>
    )
}
