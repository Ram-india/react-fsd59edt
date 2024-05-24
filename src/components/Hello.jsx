import { Component } from "react";
class Hello extends Component{
    //override the render method
    render(){
      //return JSX
        console.log(this.props.name)
      return(
        <div>
          <h1>Hello {this.props.name}</h1>
        </div>
      )
    }
  }
  export default Hello;