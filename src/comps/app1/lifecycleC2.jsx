import {Component} from "react";


class Son extends Component {
    constructor(props) {
        super(props);
        console.log("2 constructor()");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("2 shouldComponentUpdate(nextProps, nextState, nextCtx)");
        console.log("\t", {params: {nextProps, nextState, nextContext}});
        return true;
    }

    render() {
        console.log("2 render()");
        return (<div>{this.props.name}</div>);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("2 getSnapshotBeforeUpdate(prevProps, prevState)");
        let result = {prevProps, prevState, label: "returned from getSnapshotBeforeUpdate() method."};
        console.log("\t", result);
        return result;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("2 componentDidUpdate(prevProps, prevState, snapshot)");
        console.log("\t", {prevProps, prevState, snapshot})
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
