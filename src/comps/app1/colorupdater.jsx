import React from "react";
import _ from "lodash";

export default class ColorUpdater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isRed: true, content: "ok", now: new Date()};
        this.handleClick = this.handleClick.bind(this);
        this.handleClickX = this.handleClickX.bind(this);
        this.handleClickY = this.handleClickY.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }

    handleClick() {
        this.setState(
            {isRed: !this.state.isRed}
            /*
            (prevState, props) => (
                {isRed: !prevState.isRed}
            )
             */
        );
    }

    handleClickX() {
        this.setState(
            (prevState, props) => (
                {content: "X"}
            )
        );
    }

    handleClickY() {
        this.setState(
            (prevState, props) => (
                {content: "Y"}
            )
        );
    }

    handleDate() {
        this.setState(
            {now: new Date()}
        );
    }

    render() {
        let commonStyle = {margin: "1rem", padding: "0.1rem"};
        let redStyle = _.extend({backgroundColor: "red"}, commonStyle);
        let blueStyle = _.extend({backgroundColor: "blue"}, commonStyle);
        let divStyle = {margin: "1rem"};
        return (
            <>
                <div style={divStyle}>
                    <button onClick={this.handleClick}>switch color</button>
                    <span style={this.state.isRed ? redStyle : blueStyle}>Color Block</span>
                </div>
                <div style={divStyle}>
                    <button onClick={this.handleClickX}>X</button>
                    <button onClick={this.handleClickY}>Y</button>
                    <span style={commonStyle}>{this.state.content}</span>
                </div>
                <div style={divStyle}>
                    <button onClick={this.handleDate}>Now</button>
                    <span style={commonStyle}>{this.state.now.toLocaleTimeString()}</span>
                </div>
            </>
        )
    }
}
