import React from "react";

export default class Testblock extends React.Component {

    static defaultProps = {
        blockTitle: "Demo..."
    }

    render() {
        return (
            <blockquote className="demo-block">
                <h3 className="demo-title">{this.props.blockName}</h3>
                <div className="demo-body">
                    {this.props.children}
                </div>
            </blockquote>
        );
    }

}
