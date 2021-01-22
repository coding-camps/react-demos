import React from "react";

class Child extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        return (<span>{this.props.text}</span>);
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    refreshChild() {
        return (e) => {
            this.setState({childText: "父更新了子",});
        }
    }
    refreshChild2 = (e) => {
        this.setState({childText: "父更新了子2",});
    }

    render() {
        return (
            <div>
                <button onClick={this.refreshChild()}>父更新子</button>
                <button onClick={this.refreshChild2}>父更新子2</button>
                <button onClick={
                    (e) => {
                        this.setState({childText: "父更新了子3"})
                    }
                }>父更新了子2</button>
                <Child text={this.state.childText || "子更新前"}/>
            </div>
        );
    }
}

export default function Commx(props) {
    return (<Father/>);
}
