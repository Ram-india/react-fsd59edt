import React, { Component } from 'react'

export class App extends Component {
  
  constructor(props){
    super(props)// call the construtor of the parent class
    //set initial sate
    this.state ={
      counter:0
    }
  }
  handleIncrement= () =>{
    this.setState({
        counter:this.state.counter + 1
      });
  }
  
  
  
  render() {
    console.log(this.state);
    return (
      <div>
      <p>count: {this.state.counter}</p>
      <button onClick={this.handleIncrement}>Increment</button>
      </div>
      
    )
  }
}

export default App
