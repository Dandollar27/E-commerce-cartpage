import React, { useReducer, useState } from "react";
import { AppContext } from "./AppContext";



const AppProvider = ({children}) => {
    const InitialValue = []
    const CartReducer = (state, action) => {
        switch (action.type) {
            case "Add_To_Cart":{
                const existingCart = state.findIndex(item => item.id === action.payload.id)
                if (existingCart === -1){
                    const newItem = {...action.payload, quatity : 1}
                    return [...state, newItem]
                }else{
                    const UpdatedCart = state[existingCart];
                    UpdatedCart.quatity += 1;

                    return[...state]; 
                }
            }
        case "Remove_from_cart":
          return state.filter(item => item.id !== action.payload);
          default:
            return state;
        }
    };
    const [cart, dispatch] = useReducer(CartReducer, InitialValue);
    console.log(cart)
  return (
    <>
       <AppContext.Provider value={{cart, dispatch}} >
           {children}
       </AppContext.Provider>
    </>
  )
}

export default AppProvider