import { Component } from "react";

class Hello extends Component{
  //override the render method
  render(){
    //return JSX
    return(
      <div>
        <h1>Class Component</h1>
      </div>
    )
  }
}

class App extends Component{
  //override the render method
  render(){
    //return JSX
    return(
      <div>
        <Hello/>
      </div>
    )
  }
}
export default App;
