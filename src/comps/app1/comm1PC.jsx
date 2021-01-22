import {Component} from "react";

class Comm1Child1Clz extends Component {
    render() {
        return (
            <>
                Child1 =>
                [{this.props.childMsg1}],
                [{this.props.childMsg2}],
            </>
        );
    }
}

function Comm1Child2Fun(props) {
    return (
        <>
            Child2 =>
            [{props.childMsg1}],
            [{props.childMsg2}],
        </>
    );
}

class Comm1Parent1FClz extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    refreshChild = (e) => {
        let x = e.target.getAttribute("x");
        if(x === "1") {
            this.setState({childMsg2: e.target.value});
        } else {
            this.setState({childMsg3: e.target.value});
        }
    }

    render() {
        return (
            <div>
                <input type={"text"} onChange={this.refreshChild} x={"1"}/>
                <Comm1Child1Clz
                    childMsg1={"parent1-MSG-1"}
                    childMsg2={this.state.childMsg2}
                />
                <br/>
                <input type={"text"} onChange={this.refreshChild}/>
                <Comm1Child2Fun
                    childMsg1={"parent1-MSG-2"}
                    childMsg2={this.state.childMsg3}
                />
            </div>
        );
    }
}

export default class Comm1PC extends Component {
    render() {
        return (<Comm1Parent1FClz/>);
    }
}
