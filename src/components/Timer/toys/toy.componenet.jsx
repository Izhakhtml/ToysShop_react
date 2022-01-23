import React from "react";
import Pazel from "./Pazel.component";
import VideoGame from "./VideoGame.component";
import Boll from "./Boll.component";
export default class Toy extends React.Component{
constructor(props){
   super(props)
   this.state={ToyName:"",age:0}
   this.InputValue = this.InputValue.bind(this)
   this.SetData = this.SetData.bind(this)
}
InputValue(e){
this.state[e.target.name]=e.target.value
}
SetData(){
this.setState({ToyName:this.state.ToyName})
}
// componentWillMount() {
// alert("wellcome")
// }
// componentDidMount() {
// console.log("the app up successfullly");
// }
// componentWillUpdate() {
// alert("before updating")
// }
// componentDidUpdate() {
// console.log("after updating");
// }
render(){
return(
    <div>
        <Boll/>
        {/* <VideoGame/> */}
        {/* <Pazel/> */}
        {/* <label>toy name:</label><br />
        <input type="text"name="ToyName" onChange={this.InputValue}/><br />
        <label>age:</label><br />
        <input type="number"name="age" onChange={this.InputValue}/><br />
        <button onClick={this.SetData}>SEND</button> */}
        {/* <h1>{this.props.toyName}</h1> */}
        {/* <h1>{this.state.ToyName}</h1>
        <h1>{this.state.age}</h1> */}

    </div>
)
}
}