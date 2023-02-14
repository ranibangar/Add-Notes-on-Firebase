import React, { useState } from "react";
import { database } from "../helper";
import GetNotes from "./getNotes";
const NotePage = () => {
  const [data, setData] = useState({
    notes: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.notes || !data.description) {
      alert("Please fill all the details");
      return;
    }
    database.push(data);
    setData({
      notes: "",
      description: "",
    });
    alert("Add Note Successfully");
  };

  return (
    <React.Fragment>
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
        <button type="submit" className="btn btn-outline-warning">
          Submit
        </button>
      </form>
      <br />
   <GetNotes />
    </React.Fragment>
  );
};

export default NotePage;