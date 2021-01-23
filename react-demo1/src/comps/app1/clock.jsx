import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};
    }

    componentDidMount() {
        this.clockId = setInterval(
            () => this.trick(),
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
        let blockStyle = {};
        return (
            <div>
                <span style={blockStyle}>Date: {this.state.time.toLocaleDateString('yyyymmdd')}</span><br/>
                <span style={blockStyle}>Time: {this.state.time.toLocaleTimeString()}</span>
            </div>
        );
    }
}
