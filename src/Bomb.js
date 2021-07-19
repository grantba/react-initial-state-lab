// your Bomb code here!
// your ImageSlider code here!
// your ImageSlider code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
 
    secondsLeftFunction = () => {
        return this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
    }

    render() {
        return (
        <div id="bomb">
            <h1>{this.secondsLeftFunction()}</h1>
        </div>
        )
    }
}