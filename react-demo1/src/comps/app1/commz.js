import React from "react";

class Brother1 extends React.Component {
    render() {
        return (
            <button onClick={this.props.refresh}>更新兄弟组件</button>
        );
    }

}

class Brother2 extends React.Component {
    render() {
        return (
            <span>{this.props.text || "兄弟组件未更新"}</span>
        );
    }

}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    refresh() {
        return (e) => {
            this.setState({text: "兄弟组件通信成功"});
        };
    }

    render() {
        return (
            <div>
                <Brother1 refresh={this.refresh()}/>
                <Brother2 text={this.state.text}/>
            </div>
        );
    }
}

export default function Commz() {
    return (<div><Father/></div>);
}
