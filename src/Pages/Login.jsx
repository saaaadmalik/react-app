import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError,setEmailError]= useState('')
    const [passwordError,setPasswordError]= useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value) //the object thrown by event handler i.e (e) has many properties but we need some of them i.e. target and in that property we need value. this gives the value entered by user

    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value) //the object thrown by event handler i.e (e) has many properties but we need some of them i.e. target and in that property we need value. this gives the value entered by user

    }
    const handleSubmit = (e)=>{
        e.preventDefault()   //prevents the default behaviour of form and request not sent to server and page not refreshed

        // if(!email || !password){
        //     alert("Please provide email and password")
        //     return
        // }

        if (!email){
            setEmailError("Please provide email")
            return    // returns the control from the function. so next lines are not executed
        }else{
            setEmailError("")
        }
        if (!password){
            setPasswordError("Please provide password")
            return
        }else{
            setPasswordError("")
        }
        console.log(email,password)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>   {/*form tag has an event handler called onSubmit. this event is triggered whenever there is a button in the form with type submit is clicked */}
            <div className="row mb-3">
                <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" onChange={handleEmailChange} className="form-control" id="Email" />
                    <p style={{color:"red"}}>{emailError}</p>
                    
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="Password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" onChange={handlePasswordChange} className="form-control" id="Password" />
                    <p style={{color:"red"}}>{passwordError}</p>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Sign in</button>
        </form> 
        
        </>  
    )
}
{/*our form has a default behavior i.e whenever we submit a form it will try to post that form on the serve and thats why our page reloads*/}
export default Login

//in react we use states to store data . we don;t store them in the variables like we do in vanilla js
//whenever an event occurs then that event handler i.e. onSubmit, onChange etc, throws an object and we can receive that object as an argument in our function as we did here
//our first target in handling the form is to grab the input(value)that user enters in the field