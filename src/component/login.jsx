import React, { useContext, useState }from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext";
import { googleProvider } from "../helper";
import "firebase/auth";
import firebase from "firebase/app";

const Login = () => {
    
    const navigate = useNavigate();
    const { setCheckLogin } =useContext(UserContext);
    const[email,setEmail]= useState("");
    const[password,setPassword]= useState("");
// console.log("STATE", email,password);
    const handleSubmit =(e) =>{
        e.preventDefault();
       if(!email||!password) {
       alert("Please fill all the details");
       return;
       }
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    setCheckLogin(true);
    navigate("/");
 };

 const handleGoogleLogin =()=>{
 firebase.auth().signInWithPopup(googleProvider);
 }
    return(
      <>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email Id
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-warning btn-block d-flex justify-content-center mb-4"
        >
          Login
        </button>
      </form>
      <button type="button" onClick={()=>handleGoogleLogin()} className="btn btn-outline-warning">
        Google Auth
        </button>
    </>
    )
};
export default Login;