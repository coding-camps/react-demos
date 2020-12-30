import React from "react";

export default class LifecycleC1 extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = null;
    }

    static defaultProps = {
        name: "React",
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
    }

    /*
    componentWillMount() {
        console.log("componentWillMount(): finished invoking before the first render");
        console.log("\tNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps");
        console.log("\t@deprecated 16.3, use componentDidMount or the constructor instead");
        console.log("\twill stop working in React 17");
    }

    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount(): finished invoking before the first render");
        console.log("\tNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps");
        console.log("\t@deprecated 16.3, use componentDidMount or the constructor instead")
        console.log("\twill NOT stop working in React 17");
        console.log("");
    }
     */

    render() {
        console.log("render()");
        return (
            <div>{this.props.name}</div>
        );
    }
    componentDidMount() {
        console.log("componentDidMount() ");
    }

}
