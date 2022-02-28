import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './Login.css';
const Login = () =>{
 
    const [email,setEmail] =useState('');
    //  const [emailError,setEmailError]=useState('');

    const [password,setPassword]= useState('');
    // const [passwordError,setPasswordError]=useState('');
    let navigate = useNavigate();
    // const [successMsg,setSuccessMsg]=useState('');

    //  useEffect(()=>{
    //  const history = useHistory();
    //   if(localStorage.getItem('user-info')){
    //         history.push("/");
    //     }
    // },[])

    // const handleEmailChange = (e) => {
    //     setSuccessMsg('');
    //     setEmailError('');
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange = (e) => {
    //     setSuccessMsg('');
    //     setPasswordError('');
    //     setPassword(e.target.value);
    // }

    
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post('https://fakestoreapi.com/auth/login', {username: email, password: password})
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("id", JSON.stringify(res));
            console.log(res);
            localStorage.setItem("username", JSON.stringify(email));
          localStorage.setItem("password", JSON.stringify(password));
            return navigate("/");
          }
        });
      
    };

    // function onLogin(){
    //     let item={email,password};
    //     let result=  fetch('https://fakestoreapi.com/auth/login',{
    //         method:'POST',
    //         headers :{
    //             'Content-Type':'application/json',
    //             'Accept':'application/json',
    //         },
    //         body:JSON.stringify(item)
    //     });
    //     result=  result.json();
    //     localStorage.setItem('user-info',JSON.stringify(result));
    // }
    // const handleFormSubmit = (e) =>{
    //     e.preventDefault();
    //     // checking email is empty
    //     if(email!==''){
    //         const emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //         if(emailRegex.test(email)){
    //             setEmailError('');
    //             // if(email=== 'vijayant@demo.com'){
    //             //     setEmailError('');
    //             //     if(password==='demo'){
    //             //        setSuccessMsg('You are successfully logged in')     
    //             //     }
    //             //     else{
    //             //         setPasswordError("Password does not match with this email");
    //             //     }
    //             // }
    //             // else{
    //             //     setEmailError("Email does not match");
    //             // }
    //         }
    //         else{
    //             setEmailError("Invalid Email");
    //         }
    //     }
    //     else{
    //         setEmailError("Email Required");
    //     }
    //     //checking if password is empty
    //     if(password!==''){

    //     }
    //     else{
    //         setPasswordError("Password Required");
    //     }
    // }


    return(
        <div className="wrapper">

        <h3>Login Form</h3>

        
        <form className="form-group form" autoComplete="off"
        onSubmit={handleSubmit}>

        {/* {successMsg&&<>
        <div className="success-msg">{successMsg}</div>
        <br></br>
        </>}    */}

            <label>Email</label>
            <input type="text" className="form-control custom-input" placeholder="Enter your email address" 
             onChange={(e) => setEmail(e.target.value)} value={email}/>
            {/* {emailError&&<div className='error-msg '>{emailError}</div>} */}
            <br></br>

            <label>Password</label>
            <input type="password" className="form-control custom-input" placeholder="Enter your password" 
            onChange={(e) => setPassword(e.target.value)} value={password}/>
            {/* {passwordError&&<div className='error-msg'>{passwordError}</div>} */}
            <br></br>

            <button type="submit" 
            className="btn btn-success btn-lg" style={{width:100 + '%'}}>Login</button>
        </form>

        </div>
    )
}

export default Login;