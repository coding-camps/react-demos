import React from "react";
import "./testblock.scss";

export default class Testblock extends React.Component {

    static defaultProps = {
        blockTitle: "Demo..."
    }

    render() {
        return (
            <blockquote className="demo-block">
                <h3 className="demo-seperator">{this.props.blockName}</h3>
                <hr className="demo-line"/>
                <div>
                    {this.props.children}
                </div>
            </blockquote>
        );
    }
}