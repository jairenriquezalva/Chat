import React from 'react'
import { Component } from "react";
  
class Page2 extends Component {

  componentDidMount = () =>{
    var e = new Event('juegoListo');
    document.dispatchEvent(e);
  }

  // componentWillUnmount(){
  //   let event = new Event('juegoTerminado')
  //   document.dispatchEvent(event)
  // }

  render(){ return (
      <div className="Info">
        <h1>About us:</h1>
        <div>lorem asdfasdfasfasdfasdfdsfadfssadfsdfda</div>
        <div>ChatInput</div>
        <div id="game">
        </div>
      </div>
    );
  }
}

export default Page2;