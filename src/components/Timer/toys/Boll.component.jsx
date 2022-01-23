import React ,{useContext}from "react";
import { UserContext } from "../toys/MyProvider.component";
export default function Boll (){
let myConstumer = useContext(UserContext)    
return(
    <div>
         <h1>{myConstumer.typeConsumer}</h1>
    </div>
)    
}    
