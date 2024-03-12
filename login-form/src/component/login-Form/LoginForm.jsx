import React, {useState} from "react";
import './LoginForm.css'
// import { FaUser } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [popup,setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    };
    // if(popup) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }
    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        // Prioritize checking for empty fields first:
        // if (!formData.username.trim()) {
        //     validationErrors.username = "Username is required.";
        // } else if (formData.username.length < 6) {
        //     validationErrors.username = "Username must be at least 6 characters long.";
        // }
        //
        // if (!formData.password.trim()) {
        //     validationErrors.password = "Password is required.";
        // } else if (formData.password.length < 6) {
        //     validationErrors.password = "Password must be at least 6 characters long.";
        // }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            togglePopup();
            //alert("Form Submitted Succesfully");
        }
    };

    return(
        <>
            <div className='wrapper'>
                <form onSubmit={handleSubmit} action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text"
                               placeholder="Username"
                               onChange={handleChange}
                               required/>
                        {errors.username && <span>{errors.username}</span>}
                        {/*<FaUser className="icon" />*/}
                    </div>
                    <div className="input-box">
                        <input type="password"
                               placeholder="Password"
                               onChange={handleChange}
                               required/>
                        {errors.password && <span>{errors.password}</span>}
                        {/*<FaLock className="icon" />*/}
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="/">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="/signup">Register</a></p>
                    </div>
                </form>
            </div>
            {popup && (
                <div className="popup">
                    <div className="overlay">
                        <div className="modal-content">
                            <h1> Confirmation</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate dolor cumque quisquam hic
                                deserunt. Laboriosam ex atque, unde repellendus, voluptatum libero iure, dolorem ad aspernatur
                                minus labore pariatur cupiditate. Rem doloribus saepe asperiores nemo ut sapiente pariatur
                                autem, molestiae quisquam? Id consequatur omnis fuga, odio, dolorem, blanditiis cupiditate
                                eligendi asperiores eaque quasi culpa amet mollitia ratione!
                            </p>
                            <div className="confirmation">
                                <button onClick={togglePopup} className="button no">
                                    No
                                </button>
                                <button className="button yes">
                                    <a href="/Signup"> Accept </a>
                                </button>
                            </div>
                            <button onClick={togglePopup} className="close-modal no">
                                {/*<RxCross2 />*/}
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default LoginForm