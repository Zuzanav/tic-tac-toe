import React from "react";
import "./style.css";

class Square extends React.Component {
    render() {
    return (
        <div className="square">
            <button className="square"> {this.props.value} </button>
        </div>
    );
  };
}
  
  export default Square;
