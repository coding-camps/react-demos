import React from "react";

export default class LifecycleC1 extends React.Component {
    static defaultProps = {
        name: "mounting-1 defaultProps",
    }

    constructor(props) {
        super(props);
        console.log("mounting-1 constructor");
    }

    render() {
        console.log("mounting-1 render()");
        return (<div>{this.props.name}</div>);
    }

    componentDidMount() {
        console.log("mounting-1 componentDidMount() ");
    }

}
