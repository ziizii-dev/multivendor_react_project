import { createSlice } from "@reduxjs/toolkit";

export const authReducer = createSlice({
    name :'authReducer',
    initialState:{
        successMessage:'',
        errorMessage:'',
        loader:false,
        userInfo:''
    },
    reducers:{

    },
    extraReducers: () => {

    }
})
export default authReducer.reducer