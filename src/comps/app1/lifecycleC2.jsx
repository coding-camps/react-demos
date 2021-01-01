import {Component} from "react";


class Son extends Component {
    constructor(props) {
        super(props);
        // this.state = {};
        console.log("constructor()");
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps(nextProps, nextCtx)");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate(nextProps, nextState, nextCtx)");
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate(nextProps, nextState, nextCtx");
    }

    render() {
        console.log("render()");
        return (<div>{this.props.name}</div>);
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate(prevProps, prevState, snapshot)");
    }

}

class Father extends Component {
    constructor(props) {
        super(props);
        this.updateChildProps = this.updateChildProps.bind(this);
        this.state = {
            name: "React"
        };
    }

    updateChildProps() {
        this.setState({name: "Vue"});
    }

    render() {
        return (
            <div>
                <Son name={this.state.name}/>
                <button onClick={this.updateChildProps}>更新子组件</button>
            </div>
        );
    }

}


export default function LifecycleC2() {
    return (
        <div>
            <Father/>
        </div>
    );
}
