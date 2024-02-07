import { createContext, useState,useReducer } from "react";

export const MainContext = createContext();

export const reducer =  (state,action)=>{
    switch(action.type){
        case 'Increment':
            return {
                count : state.count + 1
            }
    }
}

 export const MainContextProvider = ({children})=>{
const [state,setState] = useState(10)
const initialValue = {
    name:"iqbal"
}

const [states,dispatch]  = useReducer(reducer , initialValue)
const value = {
    state,setState,
    states,
    dispatch
}

    return <MainContext.Provider value={value}>{children}</MainContext.Provider>
 }