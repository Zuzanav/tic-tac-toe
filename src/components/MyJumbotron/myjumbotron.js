import React from "react";
import "./style.css"
import { Jumbotron, Container } from 'reactstrap';

class MyJumbotron extends React.Component {
    render() {
    return (
      <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 text-center">Tic Tac Toe</h1>
        </Container>
      </Jumbotron>
    </div>
    );
  };
}
  
  export default MyJumbotron;





