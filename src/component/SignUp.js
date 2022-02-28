import React, { useState } from "react";

const SignUp = () => {
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");

return(
    <div className="wrapper">
        <h3>Registration Form</h3>

        <form className="form-group form" autoComplete="off">

            <label>UserName</label>
            <input type="text" className="form-control custom-input" name="username" placeholder="Enter your email address" 
             onChange={(e) => setUserName(e.target.value)} value={username}/>


            <label>Email</label>
            <input type="text" className="form-control custom-input" name="email" placeholder="Enter your email address" 
             onChange={(e) => setEmail(e.target.value)} value={email}/>
            <br></br>
            <label>Password</label>
            <input type="password" className="form-control custom-input" name="password" placeholder="Enter your password" 
            onChange={(e) => setPassword(e.target.value)} value={password}/>
            
            <br></br>
            <button type="submit" 
            className="btn btn-success btn-lg" style={{width:100 + '%'}}>SignUp</button>
        </form>

    </div>
)
}

export default SignUp;