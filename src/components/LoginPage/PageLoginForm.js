import React from 'react'
import './PageLoginForm.css'


function PageLoginForm(props) {

    const emailHandel = (e) => {
        props.setEnterEmail(e.target.value)
    }
    const passwordHandel = (e) => {
        props.setEnterPassword(e.target.value)
    }
    
    return (
        <div className="PageLoginForm_body">
            <form onSubmit={props.submitHandler}>
                <div className="PageLoginForm_input">
                    <input type="type" className="PageLoginForm_input__text" placeholder="Email or Telephone" onChange={emailHandel} />
                </div>
                <div className="PageLoginForm_input">
                    <input type="password" className="PageLoginForm_input__text" placeholder="Password" onChange={passwordHandel} />
                </div>
                <div className="PageLoginForm_input">
                    <button className="PageLoginForm_input__btn">Login</button>
                </div>
            </form>
            <div className="PageLoginForm_fp">
                <a href="/"> Forget Password?</a>
            </div>
            <div className="PageLoginForm_space"></div>
            <div className="PageLoginForm_register">
                <button className="PageLoginForm_input__btn__register">Register</button>
            </div>
        </div>
    )
}


export default PageLoginForm