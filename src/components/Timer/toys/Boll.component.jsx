import React ,{useContext}from "react";
import { UserContext } from "../toys/MyProvider.component";
export default function Boll (){
let myConstumer = useContext(UserContext)    
return(
    <div>
         <h1 style={{color:myConstumer.colorConsumer,background:myConstumer.backConsumer}}>{myConstumer.typeConsumer}</h1>
         <h1>{myConstumer.ageConsumer}</h1>

    </div>
)    
}    
