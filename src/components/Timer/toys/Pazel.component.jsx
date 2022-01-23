import React from "react";
import { UserContext } from "../toys/MyProvider.component";
export default class Pazel extends React.Component{
render(){

return(
    <div>
        <h1>{UserContext._currentValue.typeConsumer}</h1>
    </div>
)
}    
}