import React, {Component} from 'react';
import './App.css';
class App extends Component{
  constructor(){
    super();
    this.state={
      string:'hello'
    }
  }
  render(){
    
    return(
      <div className='App'>
        <p>{this.state.string}</p>
        <button onClick={()=>this.setState({string:'holisss'})}>Change Text</button>
      </div>
    )
  }
}

export default App;
