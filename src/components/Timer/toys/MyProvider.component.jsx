import React from "react";
import Toy from "./toy.componenet";
export const UserContext = React.createContext();

export const MyProvider = ()=>{
return(
    <UserContext.Provider value={{typeConsumer:"constumer"}}>
    <Toy/>
    </UserContext.Provider>
)   
}