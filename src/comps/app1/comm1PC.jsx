import {Component} from "react";

class Comm1Child1Clz extends Component {
    render() {
        return (
            <div>
                Child1 =>
                [{this.props.child1Msg1}],
                [{this.props.child1Msg2}],
            </div>
        );
    }
}

function Comm1Child2Fun(props) {
    const {child2Msg1, child2Msg2} = props;
    return (
        <div>
            Child2 =>
            [{child2Msg1}],
            [{child2Msg2}],
        </div>
    );
}

class Comm1Parent1FClz extends Component {
    render() {
        return (
            <div>
                <Comm1Child1Clz child1Msg1={"parent1-MSG-1"} child1Msg2={"parent1-MSG-2"}/>
                <Comm1Child2Fun child2Msg1={"parent1-MSG-3"} child2Msg2={"parent1-MSG-4"}/>
            </div>
        );
    }
}

export default class Comm1PC extends Component {
    render() {
        return (<Comm1Parent1FClz/>);
    }
}
