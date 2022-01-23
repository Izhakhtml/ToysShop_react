import React from "react";
export default class Toy extends React.Component{
constructor(props){
   super(props)
   this.state={ToyName:""}
   this.InputValue = this.InputValue.bind(this)
   this.SetData = this.SetData.bind(this)
}
InputValue(e){
this.state[e.target.name]=e.target.value
}
SetData(){
this.setState({ToyName:this.state.ToyName})
}
render(){
return(
    <div>
        <label>toy name:</label><br />
        <input type="text"name="ToyName" onChange={this.InputValue}/>
        <button onClick={this.SetData}>SEND</button>
        <h1>{this.props.toyName}</h1>
        <h1>{this.state.ToyName}</h1>

    </div>
)
}
}