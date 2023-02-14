import React, { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext";
const LogOut = () => {
    const navigate = useNavigate();
    const {setCheckLogin} = useContext(UserContext);
    const handleLogout = ()=> {
        setCheckLogin(false);
        localStorage.clear();
        navigate("/login");
    };
    return(
    <>
<div class="card text-left"> 
  <div class="card-body bg-secondary">
    <h4 class="card-title text-white">Do you wish to logout from website?</h4>
    <p class="card-text mt-5">
        <button type="button" class="btn btn-outline-warning" onClick={() => handleLogout()}>
            Logout
        </button>
    </p>
  </div>
 </div>
 </>
);
};
export default LogOut;




