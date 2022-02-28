import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const SignUp = () => {
    const [isError,setIsError] = useState("");
   const [username,setUserName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [confirmPassword,setConfirmPassword] = useState("");

   let navigate = useNavigate();
const handleSubmit = async(e) => {
    e.preventDefault();
    const signupdata = await axios
    .get("https://fakestoreapi.com/users")
    if(signupdata){
        const res = signupdata.data.filter(
            (x) => x.username ===  username && x.email === email && x.password === password
        );
       
        console.log(res);
        localStorage.setItem("data", JSON.stringify(res));
        navigate("/");
    }
}


const checkValidation = (e) => {
    setConfirmPassword(e.target.value);
    if(password != confirmPassword){
        setIsError("Confirm Password should be match with Password");
    }else{
        setIsError("");
    }
    
}


return(
    <div className="wrapper">
        <h3>Registration Form</h3>
        <div style={{width:"100%",position:"absolute"}}>
                   {isError} 
             </div>
        <form className="form-group form" autoComplete="off" onSubmit={handleSubmit}>

            <label>UserName</label>
            <input type="text" className="form-control custom-input" name="username" placeholder="Enter your email address" 
              value={username} onChange={(e) => setUserName(e.target.value)}/>


            <label>Email</label>
            <input type="text" className="form-control custom-input" name="email" placeholder="Enter your email address" 
              value={email} onChange={(e) => setEmail(e.target.value)}/>
        
            <label>Password</label>
            <input type="Password" className="form-control custom-input" name="password" placeholder="Enter your password" 
             value={password} onChange={(e) => setPassword(e.target.value)}/>
            
            <label>Confirm Password</label>
            <input type="Password" className="form-control custom-input" name="password" placeholder="Enter your Confirm password" 
             value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
             {/* <div style={{width:"100%",position:"absolute"}}>
                   {isError} 
             </div> */}
             <br></br>
            <button type="submit" 
            className="btn btn-success btn-lg" style={{width:100 + '%'}}>SignUp</button>
        </form>

    </div>
)
}

export default SignUp;