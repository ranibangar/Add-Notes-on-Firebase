import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { database } from "../helper"; 
import { setEditNote } from "../slice/notesSlice";

const EditPage = () =>{
   const navigate = useNavigate();
   const dispatch =useDispatch();
  const {editNote} = useSelector((state)=>state.note);
  
  const [data,setData] = useState({
    description:"",
    notes:"",
  })

  const handleSubmit =(e)=>{
  e.preventDefault();
  database.child(editNote.index).update(data);
dispatch(setEditNote(null));
  navigate("/notepage");
};

useEffect(()=>{
  if(editNote==null){
    navigate("/notepage");
  }else{
    setData({
      description:editNote.info.description,
      notes:editNote.info.notes,

    })
  }
},[])
return(
    <>
    <h1>
        This is Edit page.
        <br />

        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={data?.notes}
            className="form-control"
            placeholder="Enter Your Note Here.."
            onChange={(e) =>
              setData((prevState) => ({ ...prevState, notes: e.target.value }))
            }
          />
        </div>
        <br />
        <div className="form-group">
          <textarea
            value={data.description}
            type="text"
            className="form-control"
            placeholder="Enter Description"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>
        <br />
        <button type="button" className="btn btn-outline-danger"style={{ marginRight: "15px" }}
        onClick={()=>{
               dispatch(setEditNote(null));
               navigate("/notepage");
 
        }}>
       Back       
      </button>
        <button type="submit" className="btn btn-outline-warning">
          Submit
        </button>
      </form>

    </h1>
    </>
);
};
export default EditPage;