import {Component, useState} from "react";


const innerBlockStyle = {
    border: "dotted 1px lightblue",
    borderRadius: "0.5rem",
    margin: "0.5rem",
    padding: "0.5rem",
    backgroundColor: "lightBlue",
};

class Comm3Child1C extends Component {
    handleClick() {
        this.props.msgCallback("Child1C-MSG-1");
    }
    handleChange(e) {
        this.props.msgCallback(e.target.value);
    }

    render() {
        return (
            <div>
                Child 1C =>
                <input type="text" onChange={this.handleChange.bind(this)}/>
                <button style={{margin: "0.3rem"}} onClick={this.handleClick.bind(this)}>
                    Child1C->Child 2C,2F
                </button>
            </div>
        );
    }
}

function Comm3Child1F(props) {
    const handleClick = () => {
        props.msgCallback("Child1F-MSG-1");
    };
    const handleChange = (e) => {
        props.msgCallback(e.target.value);
    }
    return (
        <div>
            Child 1F =>
            <input type="text" onChange={handleChange}/>
            <button style={{margin: "0.3rem"}} onClick={handleClick}>
                Child1F->Child 2C,2F
            </button>
        </div>
    );
}

class Comm3Parent1C extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getChildMsg(childMsg) {
        this.setState({msg: childMsg});
    }

    render() {
        return (
            <div style={innerBlockStyle}>
                <h4>Child 1C => Parent1(class)=> Child 2(class), 2(function)</h4>
                <Comm3Child1C msgCallback={this.getChildMsg.bind(this)}/>
                <Comm3Child2C msg={this.state.msg}/>
                <Comm3Child2F msg={this.state.msg}/>
            </div>
        );
    }
}

function Comm3Parent2F(props) {
    const [msg, setMsg] = useState(null);
    const getChildMsg = (childMsg) => {
        setMsg(childMsg);
    };
    return (
        <div style={innerBlockStyle}>
            <h4>Child 1F => Parent1(function)=> Child 2(class), 2(function)</h4>
            <Comm3Child1F msgCallback={getChildMsg}/>
            <Comm3Child2C msg={msg}/>
            <Comm3Child2F msg={msg}/>
        </div>
    );
}

class Comm3Child2C extends Component {
    render() {
        return (
            <div>
                Child 2C => {this.props.msg || "child2C-default-message"}
            </div>
        );
    }

}


function Comm3Child2F(props) {
    return (
        <div>
            Child 2F => {props.msg || "child2F-default-message "}
        </div>
    );
}

export default class Comm3CC extends Component {
    render() {
        return (
            <div>
                <Comm3Parent1C/>
                <Comm3Parent2F/>
                <input type="text"/>
            </div>
        );
    }
}
