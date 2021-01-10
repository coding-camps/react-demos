import React from "react";
import PropTypes from "prop-types"

class Son extends React.Component {
    // Mounting
    static defaultProps = {
        msg: "default-msg",
        shouldUpdate: false,
    };
    static propTypes = {
        msg: PropTypes.string,
        shouldUpdate: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        console.log("lifecycle: constructor()", this.props);
    }

    render() {
        console.log("lifecycle: render()", this.props);
        return (
            <div style={this.props.style}>
                {this.props.msg}
            </div>
        );
    }

    componentDidMount() {
        console.log("lifecycle: componentDidMount()", this.props);
    }

    // Updating
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("lifecycle: shouldComponentUpdate(nextProps, nextState, nextContext)", this.props);
        return this.props.shouldUpdate;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("lifecycle: componentDidUpdate(prevProps, prevState, snapshot)", this.props);
    }

    // Unmounting
    componentWillUnmount() {
        console.log("lifecycle: componentWillUnmount()", this.props);
    }
}


class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainShow: false,
            shouldUpdate: false,
            // msg: "NO-MSG",
        };
    }

    clickMainShow() {
        console.log("clickMainShow():");
        this.setState({
            mainShow: !this.state.mainShow,
        });
    }

    clickShouldUpdate() {
        console.log("setShouldUpdate(): ", this.state.shouldUpdate);
        this.setState({
            shouldUpdate: !this.state.shouldUpdate,
        });
        console.log("setShouldUpdate(): ", this.state.shouldUpdate);
    }
    componentDidMount() {
        console.log("-- componentDidMount():", this.state);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("-- componentDidUpdate(prevProps, prevState, snapshot)", this.state, {prevProps, prevState, snapshot});
    }

    inputContent(e) {
        console.log("inputContent()");
        this.setState({msg: e.target.value});
    }

    render() {
        let style = {margin: "0.5rem", border: "solid 1px blue", padding: " 0.3rem", height: "4rem"};
        return (
            <div style={{display: "flex", flexDirection: "row",}}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "min-content",
                    alignItems: "baseline",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                }}>
                    <input type={"text"} placeholder={"will be updated message"} maxLength={30}
                           style={{width: "14rem", height: "1.1rem"}}
                           disabled={!this.state.mainShow}
                           onChange={this.inputContent.bind(this)}/>
                    <span style={{width: "fit-content", margin: "0.5rem 0.2rem 0.5rem"}}>
                        Should Component Update?
                    </span>
                    <input type={"checkbox"} defaultChecked={false}
                           disabled={!this.state.mainShow}
                           onClick={this.clickShouldUpdate.bind(this)}/>
                    <button style={{margin: "0.5rem", width: "14.2rem"}}
                            onClick={this.clickMainShow.bind(this)}>
                        {this.state.mainShow ? "卸载" : "加载"}
                    </button>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "20rem"}}>
                    {
                        this.state.mainShow
                            ? (<Son style={style} shouldUpdate={this.state.shouldUpdate} msg={this.state.msg}/>)
                            : (<div style={style}>Not Loaded ~!</div>)
                    }
                </div>
            </div>);
    }
}


export default function LifeCycleFull() {
    return (<Father/>);
}
