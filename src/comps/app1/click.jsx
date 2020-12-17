import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
    }

    componentDidMount() {
        this.clockId = setInterval(
            ()=>this.trick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.clockId);
    }

    trick() {
        this.setState({
            time: new Date()
        })
    }

    render() {
        let blockStyle = {width: "fit-content"};
        return (
            <div>
                <h1 style={blockStyle}>Date: {this.state.time.toLocaleDateString()}</h1>
                <h1 style={blockStyle}>Time: {this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}