import React from 'react'
import classes from './Modal.module.css'

const ModalOverLay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}


function Modal(props) {
    return (
        <>
            <ModalOverLay>{props.children}</ModalOverLay>
        </>
    )
}


export default Modal
