import React from "react";

export default class Sayhello extends React.Component {
    static defaultProps = {
        name: "天使"
    }

    render() {
        const style = {
            margin: "10px",
            display: "contents",
        };
        return (
            <span style={style} className="sayHello">
                Hello {this.props.name}
            </span>
        );
    }
}
