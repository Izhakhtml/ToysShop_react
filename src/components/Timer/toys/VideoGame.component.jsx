import React from "react";
import { UserContext } from "../toys/MyProvider.component";
export default class VideoGame extends React.Component{

render(){
return(
    <div>
        <UserContext.Consumer>
        {(value)=>value.typeConsumer}
        </UserContext.Consumer>
    </div>
)
}    
}