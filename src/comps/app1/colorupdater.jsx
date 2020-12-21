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
            (prevState, props) => (
                {isRed: !prevState.isRed}
            )
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
        let commonStyle = {width: "fit-content"};
        let redStyle = _.extend({backgroundColor: "red"}, commonStyle);
        let blueStyle = _.extend({backgroundColor: "blue"}, commonStyle);
        return (
            <>
                <h2 style={this.state.isRed ? redStyle : blueStyle}>Color Block</h2>
                <h2 style={commonStyle}>{this.state.content}</h2>
                <h2 style={commonStyle}>{this.state.now.toLocaleTimeString()}</h2>
                <button onClick={this.handleClick}>Change</button>
                <button onClick={this.handleClickX}>X</button>
                <button onClick={this.handleClickY}>Y</button>
                <button onClick={this.handleDate}>Now</button>
            </>
        )
    }

}