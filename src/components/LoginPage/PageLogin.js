import React, {useState} from 'react'
import './PageLogin.css'
import PageLoginForm from './PageLoginForm'


function PageLogin(props) {
    const [enterEmail, setEnterEmail] = useState('')
    const [enterPassword, setEnterPassword] = useState('')

    const enterEmailHandel = (text) =>{
        setEnterEmail(text)
    }
    const enterPasswordHandel = (text) =>{
        setEnterPassword(text)
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.onLogin(enterEmail, enterPassword);
      };
    return (
        <>
            <h1 style = {{textAlign : 'center', color : "red"}}>
                Well come to my webpage
            </h1>
            <div className = "block-pagelogin">
                <img src = "https://formularapida.net/wp-content/uploads/2019/01/DxG7bOQXgAEul7l.jpg" width = "300px" height = "350px" alt ="MClarne"/>
                <div className = "block_pagelogin__form">
                    <PageLoginForm 
                        setEnterEmail = {enterEmailHandel}
                        setEnterPassword = {enterPasswordHandel}
                        submitHandler = {onSubmitHandler}
                    />
                </div>
            </div>
            <footer>
                
            </footer>
        </>
    )
}

export default PageLogin
