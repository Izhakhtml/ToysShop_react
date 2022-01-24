import React from "react";
import Toy from "./toy.componenet";
export const UserContext = React.createContext();
const Ingredients = 
{typeConsumer:"constumer",
ageConsumer:55,
colorConsumer:"black",
backConsumer:"gray"}
export const MyProvider = (props)=>{
return(
    <UserContext.Provider value={Ingredients}>
    {props.children}
    </UserContext.Provider>
)   
}