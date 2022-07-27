import React, { useState } from 'react'

const Register = () => {
     
    //handling
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")
    
    //validation
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [addressError, setAddressError] = useState("")
    const [addressError2, setAddressError2] = useState("")
    const [cityError, setCityError] = useState("")
    const [zipError, setZipError] = useState("")

        //functions
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }
    const handleAddress2Change = (e) => {
        setAddress2(e.target.value)
    }
    const handleZipChange = (e) => {
        setZip(e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email){
            setEmailError("Please provide valid data")
            return
        }else{
            setEmailError("")
        }
        if(!password){
            setPasswordError("Please provide valid data")
            return
        }else{
            setPasswordError("")
        }
        if(!address){
            setAddressError("Please provide valid data")
            return
        }else{
            setAddressError("")
        }
        if(!address2){
            setAddressError2("Please provide valid data")
            return
        }else{
            setAddressError2("")
        }
        if(!city){
            setCityError("Please provide valid data")
            return
        }else{
            setCityError("")
        }
        if(!zip){
            setZipError("Please provide valid data")
            return
        }else{
            setZipError("")
        }
        console.log(email,password,address,address2,city,zip)
    }


    return (
        <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label HTMLfor="Email" className="form-label">Email</label>
                <input type="email" onChange={handleEmailChange} className="form-control" id="Email" />
                <p style={{color:"red"}}>{emailError}</p>
            </div>
            <div className="col-md-6">
                <label HTMLfor="Password" className="form-label">Password</label>
                <input type="password" onChange={handlePasswordChange} className="form-control" id="Password" />
                <p style={{color:"red"}}>{passwordError}</p>
            </div>
            <div className="col-12">
                <label HTMLfor="Address" className="form-label">Address</label>
                <input type="text" onChange={handleAddressChange} className="form-control" id="Address" placeholder="1234 Main St" />
                <p style={{color:"red"}}>{addressError}</p>
            </div>
            <div className="col-12">
                <label HTMLfor="Address2" className="form-label">Address 2</label>
                <input type="text" onChange={handleAddress2Change} className="form-control" id="Address2" placeholder="Apartment, studio, or floor" />
                <p style={{color:"red"}}>{addressError2}</p>
            </div>
            <div className="col-md-6">
                <label HTMLfor="City" className="form-label">City</label>
                <input type="text" onChange={handleCityChange} className="form-control" id="City" />
                <p style={{color:"red"}}>{cityError}</p>
            </div>

            <div className="col-md-3">
                <label HTMLfor="Zip" className="form-label">Zip</label>
                <input type="text" onChange={handleZipChange} className="form-control" id="Zip" />
                <p style={{color:"red"}}>{zipError}</p>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign up</button>
            </div>
        </form>
    )
}

export default Register

