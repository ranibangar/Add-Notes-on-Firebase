import { createSlice } from "@reduxjs/toolkit";

const NotesSlice = createSlice({

    name:"notes",
    initialState:{
  googleNotes:null,
  editNote:null
    },
    reducers:{
        setNotes:(state,action)=>{
            state.googleNotes =action.payload
        },
        setEditNote:(state,action)=>{
            state.editNote =action.payload
        },
    },
});
export const {setNotes,setEditNote} = NotesSlice.actions;

export default NotesSlice.reducer;