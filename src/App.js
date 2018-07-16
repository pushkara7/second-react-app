import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

    state={
      inputLength:'',
    }

    outputLengthHandler = (event) => {
     this.setState({inputLength:event.target.value});
    }

    deleteCharacterHandler = (index) =>{
      const text = this.state.inputLength.split('');
      text.splice(index,1);
      const newText = text.join('');
      this.setState({inputLength:newText});
    }
  render() {
         const input = this.state.inputLength.split('');
         let character =null;
         if(input.length>0){
             character = input.map((char,index) =>{
             return (
             <Char 
             character={char} 
             key={index} 
             deleted={()=>this.deleteCharacterHandler(index)}/>   )        
         });
         }
    return (
      <div className="App" >
        <header>
          <h1>React App</h1>
        </header>
        <h4>Enter a text</h4>
        <input type="text" onChange={this.outputLengthHandler} value={this.state.inputLength}/>
        <br/>
        <p>{character}</p>
        <p>Number of characters in the text :{this.state.inputLength.length}</p>
        <Validation length={this.state.inputLength.length}/>
        
      </div>
    );
  }
}

export default App;
