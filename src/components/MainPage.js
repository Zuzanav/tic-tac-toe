import React from "react";
import MyJumbotron from "./MyJumbotron/myjumbotron.js";
import Board from "./Board/board.js";
import "../App.css"


class MainPage extends React.Component {


    render() {
        return(
            <div id="wrapper">

                <div id="app">
                    <MyJumbotron />    
                </div>

                <Board />    



            </div>
        )
    }
}

export default MainPage;


