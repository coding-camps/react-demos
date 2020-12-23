import {Component} from "react";

class Comm1Child1Clz extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <span>
                    ChildA => {this.props.msg}
                </span>
            </div>
        );
    }
}

class Comm1Parent1FClz extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    refreshChild() {
        return (e) => {
            this.setState({
                childMsg: "father->sun ok",
            })
        };
    }

    render() {
        return (
            <div>
                Parent=>
                <button onClick={this.refreshChild}>
                    Parant->Child
                </button>
                <Comm1Child1Clz msg={this.state.childMsg || "original child msg"}/>
            </div>
        );
    }
}

export class Comm1PC extends Component {
    render() {
        return (<Comm1Parent1FClz/>);
    }
}
