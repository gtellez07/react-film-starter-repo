import React, { Component } from "react";

export default class Fave extends Component {

    handleClick = e => {
        console.log("afadfdadfef")
    }
    render() {
        return (
            <>
            <div onClick={this.handleClick} className="film-row-fave add_to_queue">
            <p className="material-icons">add_to_queue</p>
            </div>
            </>
        )
    }
}