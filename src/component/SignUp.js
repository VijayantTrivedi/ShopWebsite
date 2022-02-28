import React, { useState } from "react";

const SignUp = () => {
    const [values,setValues] = useState({
        username:"",
        email:"",
        password:"",
    })
const handleChange = (e) => {
setValues({
    ...values,
    [e.target.username]:e.target.value,
})
}

const handleSubmit = (e) => {

}

return(
    <div className="wrapper">
        <h3>Registration Form</h3>

        <form className="form-group form" autoComplete="off">

            <label>UserName</label>
            <input type="text" className="form-control custom-input" name="username" placeholder="Enter your email address" 
              value={values.username} onChange={handleChange}/>


            <label>Email</label>
            <input type="text" className="form-control custom-input" name="email" placeholder="Enter your email address" 
              value={values.email} onChange={handleChange}/>
            <br></br>
            <label>Password</label>
            <input type="Password" className="form-control custom-input" name="password" placeholder="Enter your password" 
             value={values.password} onChange={handleChange}/>
            
            <br></br>
            <button type="submit" 
            className="btn btn-success btn-lg" style={{width:100 + '%'}}>SignUp</button>
        </form>

    </div>
)
}

export default SignUp;