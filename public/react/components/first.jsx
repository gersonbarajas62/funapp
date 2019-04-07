import React from 'react';

class First extends React.Component{
  firstFunction(){
    console.log('hola')
  }
  secondFunction(){
    console.log('hola')
  }
  tirdFunction(){
    console.log('hola')
  }
  render(){
    return(
      <div>
        <div className="buttoncontainer">
        <button onClick={this.firstFunction}>  click me  </button><br></br>
        <button onClick={this.secondFunction}>  add </button>
        <button onClick={this.tirdFunction}> add </button><br></br>

        </div>
    </div>
  )}

}
export default First;
