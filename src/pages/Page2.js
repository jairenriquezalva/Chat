import React from 'react'
import { Component } from "react";
import Container from "components/Container"

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
      <Container>
        <h1>About us:</h1>
        <div>lorem asdfasdfasfasdfasdfdsfadfssadfsdfda</div>
        <div>ChatInput</div>
        <div id="game">
        </div>
      </Container>
    );
  }
}

export default Page2;