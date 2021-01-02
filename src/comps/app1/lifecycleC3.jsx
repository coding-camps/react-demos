import React, {Component} from "react";
import ReactDOM from "react-dom";

class Son extends Component {
    constructor(props) {
        super(props);
        console.log("constructor()");
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps(nextProps, nextContext)")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate(nextProps, nextState, nextContext)");
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate(nextProps, nextState, nextContext)");
    }

    delComponent() {

        ReactDOM.unmountComponentAtNode(document.getElementById("lifecycle3"));
    }

    render() {
        console.log("render()");
        return (
            <div>
                <div id={"lifecycle3"}>{this.props.name}</div>
                <button onClick={this.delComponent}>卸载组件</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate(prevProps, prevState, snapshot)");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount()");
    }
}

class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        }
        this.updateChildProps = this.updateChildProps.bind(this);
    }

    updateChildProps() {
        this.setState({name: "Vue"});
    }

    render() {
        console.log("render()");
        return (
            <div>
                <Son name={this.state.name}/>
                <button onClick={this.updateChildProps}>更新子组件</button>
            </div>
        );
    }
}

export default function LifecycleC3() {
    return (
        <div>
            <Father/>
        </div>
    );
}
