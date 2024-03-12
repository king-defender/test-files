import React, {useState} from "react";
import './LoginForm.css'
// import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [formData,setFormData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const handleChange=(e)=>{
        const {name,value } =e.target;
        setFormData({
            ...formData,[name] : value
        })
    }
    const [errors, setErrors] = useState({})
    const handleSubmit =(e) =>{
        e.preventDefault()
        const validationErrors = {}
        if (!formData.username.trim()){
            validationErrors.username = "Username is required"
        }
        if (!formData.email.trim()){
            validationErrors.email = "Email is required"
        } else if(!/\S+@\S\.\S +/.test(formData.email)){
            validationErrors.email = "Email is not valid"
        }
        if (!formData.password.trim()){
            validationErrors.password = "Password is required"
        }else if(formData.password.length<6){
            validationErrors.password = "password should have minimum 6 character"
        }
        if (!formData.confirmPassword !== formData.password){
            validationErrors.password = "Password not matched"
        }
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
            alert("Form Submitted Succesfully")
        }
    }
    return(
        <div className='wrapper'>
            <form onSubmit={handleSubmit} action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        required/>
                    {errors.username && <span>{errors.username}</span>}
                    {/*<FaUser className="icon"/>*/}
                </div>
                <div className="input-box">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required/>
                    {errors.email && <span>{errors.email}</span>}
                    {/*<FaLock className="icon"/>*/}
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required/>
                    {errors.password && <span>{errors.password}</span>}
                    {/*<FaLock className="icon"/>*/}
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        required/>
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                    {/*<FaLock className="icon"/>*/}
                </div>
                {/*<div className="remember-forgot">*/}
                {/*    <label><input type="checkbox" />Remember me</label>*/}
                {/*    <a href="/">Forgot password?</a>*/}
                {/*</div>*/}

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="/">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm