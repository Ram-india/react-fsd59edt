import { Component } from "react";
import Hello  from "./components/Hello";

class App extends Component{
  //override the render method
  render(){
    //return JSX
    return(
      <div>
        <Hello 
        name = "Ram"
        />
      </div>
    )
  }
}
export default App;
