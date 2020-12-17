import React from "react";
import "./sayhello.scss";

export default class Sayhello extends React.Component {
    static defaultProps = {
        name: "天使"
    }

    render() {
        return (
            <span className="sayHello">
                Hello {this.props.name}
            </span>
        );
    }
}
