import {configureStore} from "@reduxjs/toolkit";
import noteSlice from "./slice/notesSlice";

export default configureStore({
    reducer:{
        note:noteSlice
    },
});