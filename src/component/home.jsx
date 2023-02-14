import React, { useState,useEffect,useContext} from "react";
import UserContext from "../context/userContext";


const Home = () => {
const [count, setCount] = useState(0);
const context = useContext(UserContext);
console.log("CHECK THIS OUT",context)  
return (
    <> 
    <h1>This is home page</h1>
    <h1> Counter :{count}</h1>
    <button 
    onClick={() => {
        setCount(count + 1);
        }}>
            Add
            </button>
    </>
);
};

export default Home;