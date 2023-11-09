import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    user_token:null
}


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const {user,user_token}=action.payload
            state.user=user
            state.user_token=user_token

        },
        clearUser:(state)=>{
            state.user=null;
            state.user_token=null;

        }

    }
})



export const {setUser,clearUser}=authSlice.actions


export default authSlice.reducer

