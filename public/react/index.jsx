import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import First from './components/first.jsx'

 class App extends React.Component{

   render(){
     return(
       <div>
        <h1>fetus</h1>
        <First />
        </div>
     )
   }
 }


ReactDom.render(<App />,document.getElementById('app'));
