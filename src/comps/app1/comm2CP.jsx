import {Component} from "react";

class Comm2Child1Clz extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         childMsg1: "child-MSG-1",
    //     }
    // }

    handleClick() {
        // this.props.sendMsgToParant(this.state.childMsg1);
        this.props.sendMsgToParant("child1-MSG-1");
    }

    render() {
        return (
            <button style={{margin: "1rem"}} onClick={this.handleClick.bind(this)}>
                Child1->Parent
            </button>
        );
    }
}

function Comm2Child2Fun(props) {

    const handleClick = (e) => {
        props.sendMsgToParent("child2-MSG-1");
    }

    return (
        <button style={{margin: "1rem"}} onClick={handleClick}>
            Child2->Parent
        </button>
    );

}

class Comm2Parent1FClz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parantMsg1: "parent1-default-MSG-1",
            parentMsg2: "parent1-default-MSG-2",
            parentMsg3: "parent1-default-MSG-3",
        }
    }

    getChildMsg1 = (childMsg) => {
        this.setState({parantMsg1: childMsg,});
    }

    getChildMsg2 = (childMsg) => {
        this.setState({parentMsg2: childMsg});
    }

    getChildMsg3 = (childMsg) => {
        this.setState({parentMsg3: childMsg,});
    }

    render() {
        return (
            <div>
                <div>
                    <Comm2Child1Clz sendMsgToParant={this.getChildMsg1}/>
                    Parent1 => {this.state.parantMsg1}
                </div>
                <div>
                    <Comm2Child2Fun sendMsgToParent={this.getChildMsg2}/>
                    Parent1 => {this.state.parentMsg2}
                </div>
                <div>
                    <Comm2Child2Fun sendMsgToParent={this.getChildMsg3}/>
                    Parent1 => {this.state.parentMsg3}
                </div>
            </div>
        );
    }
}

export default class Comm2CP extends Component {
    render() {
        return (<Comm2Parent1FClz/>);
    }
}
