import React from "react";

export default class LifecycleC1 extends React.Component {
    constructor(props) {
        super(props);
        console.log("1 constructor");
        this.state = null;
    }

    static defaultProps = {
        name: "1 defaultProps",
    }

    render() {
        console.log("1 render()");
        return (
            <div>{this.props.name}</div>
        );
    }
    componentDidMount() {
        console.log("1 componentDidMount() ");
    }

}
