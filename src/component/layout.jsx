import React, {useContext, useEffect} from "react";
import { getLocalStorage } from "../commonFunction/getLocalStorage";
import { useNavigate} from "react-router";
import { useDispatch } from "react-redux";
import UserContext from "../context/userContext";
import { setNotes } from "../slice/notesSlice";
import { database,googleProvider } from "../helper";
import firebase from "firebase/app";
import "firebase/auth";

const Layout =({children})=>{
const context = useContext(UserContext);
const dispatch = useDispatch();
const userData = getLocalStorage();
const navigate = useNavigate();
const fetchData = ()=> {
  database.on('value',(snapshot)=>{
  const data = snapshot.val();
  dispatch(setNotes(data));
  });
   };
const fetchUserData =()=>{
firebase.auth().onAuthStateChanged((user)=>{
  console.log("DATA FROM GOOGLE",user)
})
}
useEffect(() => {
    if (!context.checkLogin) {
      if (!userData.email || !userData.password) {
        navigate("/login");
        localStorage.clear();
      } else {
        context.setCheckLogin(true);
      }
      fetchData();
      fetchUserData()
    }
  },[]);

  return <>{children}</>
};

export default Layout;