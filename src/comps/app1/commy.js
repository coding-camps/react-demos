import React from "react";

class Child extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    render() {
        return (
            <>
                <button onClick={this.props.refreshParent}>更新父组件</button>
            </>
        );
    }

}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    refreshParent() {
        this.setState({parentText: "子更新了父",});
    }

    refreshParent2 = () => {
        this.setState({parentText: "子更新了父2",});
    }

    render() {
        return (
            <div>
                <Child refreshParent={this.refreshParent.bind(this)}/>
                <Child refreshParent={this.refreshParent2}/>
                <Child refreshParent={() => {
                    this.setState({parentText: "子更新了父3",});
                }}/>
                {this.state.parentText || "父更新前"}
            </div>
        );
    }

}

export default function Commy() {
    return (
        <div>
            <Father/>
        </div>
    );
}
